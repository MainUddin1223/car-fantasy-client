import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdate = () => {
    const [product1, setProduct] = useState({})
    const { itemId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${itemId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [itemId]);
    return [product1]
}
export default useUpdate