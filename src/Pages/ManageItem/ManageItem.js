import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useUpdate from '../../Hooks/useUpdate';

const ManageItem = () => {
    const navigate = useNavigate()
    const { itemId } = useParams()
    // const [productItemCount, setProductCount] = useState(0);
    const [product, setProduct] = useState({})
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${itemId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [itemId]);
    const { _id, name, img, description, price, quantity, supplier } = product;
    console.log(quantity);
    const onSubmit = (data) => {
        console.log(quantity);
        console.log(parseInt(quantity) + parseInt(data.rating));
        const number = parseInt(quantity) + parseInt(data.rating);
        console.log(number.toString());
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url,
            {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ number })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('sucessfully updated')

            })
        navigate('/inventory')
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        In Stoke: {quantity}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {supplier}
                    </Card.Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder='Rating' type="number" {...register("rating")} />

                        <input type="submit" />
                    </form>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageItem;