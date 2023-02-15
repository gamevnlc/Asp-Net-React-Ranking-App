import {useEffect, useState} from "react";
import MovieImageArr from "./MovieImages";
import {Col, Container, Row, Card} from "react-bootstrap";
import RankingGrid from "./RankingGrid";

const RankItems = () => {
    const [items, setItems] = useState([]);
    const dateType = 1;

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
                    <Col>
                        <RankingGrid items={items} imgArr={MovieImageArr}/>
                    </Col>
                </Row>
                <Row>
                    {items.map(item => (
                        <Col key={item.id}>
                            <Card>
                                <Card.Img variant={"top"}
                                          src={MovieImageArr.find(el => el.id === item.imageId)?.image}
                                />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    )
}

export default RankItems