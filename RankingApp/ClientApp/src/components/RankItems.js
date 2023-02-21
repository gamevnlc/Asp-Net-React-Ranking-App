import {useEffect, useState} from "react";
import MovieImageArr from "./MovieImages";
import {Col, Container, Row, Card} from "react-bootstrap";
import RankingGrid from "./RankingGrid";
import ItemCollection from "./ItemCollection";

const RankItems = ({items, setItems, dataType, imgArr, localStorageKey }) => {

    const [reload, setReload] = useState(false);
    
    function Reload() {
        setReload(true);
    }
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id)
    }

    function allowDrop(ev) {
        ev.preventDefault()
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElm = ev.target
        if (targetElm.nodeName === "IMG") {
            return false
        }

        if (targetElm.childNodes.length === 0) {
            let data = parseInt(ev.dataTransfer.getData("text").substring(5));
            console.log(ev.dataTransfer.getData("text").substring(5))
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                {...item, ranking: parseInt(targetElm.id.substring(5))} : {...item, ranking: item.ranking});
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        if (items == null) {
            getDataFromApi();
        }
    }, [dataType])

    function getDataFromApi() {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {

                setItems(data);
            })
    }

    useEffect(() => {
        if (items != null) {
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
        setReload(false);
    }, [items])

    useEffect(() => {
        if (reload === true) {
            getDataFromApi();
        }
    },[reload])


    return (
        (items != null) ?
        <main>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <RankingGrid items={items}
                                     imgArr={imgArr}
                                     drag={drag}
                                     drop={drop}
                                     allowDrop={allowDrop}
                        />
                    </Col>
                </Row>
                <Row>
                    <ItemCollection items={items} drag={drag} imgArr={imgArr}/>
                    <Col xs={12}>
                        <button onClick={Reload} className="reload" style={{ "marginTop": "10px" }}> <span className="text" >Reload</span > </button>
                    </Col>
                </Row>
                
            </Container>
        </main> : <main>Loading...</main> 
    )
}

export default RankItems