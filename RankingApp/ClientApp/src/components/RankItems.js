import {useEffect, useState} from "react";
import MovieImageArr from "./MovieImages";
import {Col, Container, Row, Card} from "react-bootstrap";
import RankingGrid from "./RankingGrid";

const RankItems = () => {
    const [items, setItems] = useState([]);
    const dateType = 1;

    function drag(ev) {
        console.log(ev)
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
        fetch(`item/${dateType}`)
            .then(results => {
                return results.json()
            })
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <main>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <RankingGrid items={items}
                                     imgArr={MovieImageArr}
                                     drag={drag}
                                     drop={drop}
                                     allowDrop={allowDrop}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="d-flex justify-content-around">
                        {items.map(item => (
                            <Card key={item.id} className="un-ranking-item">
                                <Card.Img variant={"top"}
                                          src={MovieImageArr.find(el => el.id === item.imageId)?.image}
                                          id={`item-${item.id}`}
                                          style={{cursor: "pointer"}}
                                          draggable="true"
                                          onDragStart={drag}

                                />
                                <Card.Body>
                                    <Card.Title className="small">{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default RankItems