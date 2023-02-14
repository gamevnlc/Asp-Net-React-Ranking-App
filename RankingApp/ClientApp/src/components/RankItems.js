import {useEffect, useState} from "react";

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
            {
                items.length ? items.map(item => <h3 key={item.id}>{item.title}</h3>) : <div>Loading...</div>
            }
        </main>
    )
}

export default RankItems