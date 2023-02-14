import {useEffect, useState} from "react";
import MovieImageArr from "./MovieImages";

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
            <div className="items-not-ranked">
                {
                    items.length ? items.map(item =>
                        <img key={item.id} id={`item-${item.id}`}
                             src={MovieImageArr.find(o => o.id === item.imageId)?.image}/>
                    ) : <div>Loading...</div>
                }
            </div>

        </main>
    )
}

export default RankItems