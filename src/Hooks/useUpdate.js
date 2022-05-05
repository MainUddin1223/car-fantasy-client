import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdate = () => {
    const [product1, setProduct] = useState({})
    const { itemId } = useParams()
    useEffect(() => {
        fetch(`https://secret-crag-22323.herokuapp.com/inventory/${itemId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [itemId]);
    return [product1]
}
export default useUpdate