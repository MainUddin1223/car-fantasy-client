import { useEffect, useState } from "react"

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('https://secret-crag-22323.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [items])
    return [items, setItems]
}
export default useInventory