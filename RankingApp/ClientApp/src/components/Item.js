import {Card} from "react-bootstrap";
import MovieImageArr from "./MovieImages";

const Item = ({item, drag, itemImgObj}) => {
    return (
        <Card key={item.id} className="un-ranking-item">
            <Card.Img variant={"top"}
                      src={itemImgObj?.image}
                      id={`item-${item.id}`}
                      style={{cursor: "pointer"}}
                      draggable="true"
                      onDragStart={drag}

            />
            <Card.Body>
                <Card.Title className="small">{item.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
export default Item