import {Col} from "react-bootstrap";
import Item from "./Item";

const ItemCollection = ({items, drag, imgArr}) => {
    return (
        <Col xs={12} className="d-flex justify-content-around">
            {
                items.map(item => (item.ranking === 0)
                    ? <Item key={item.id} item={item} drag={drag} itemImgObj={imgArr.find(o => o.id === item.imageId)} /> : null
                ) 
            }
        </Col>
    )
}

export default ItemCollection