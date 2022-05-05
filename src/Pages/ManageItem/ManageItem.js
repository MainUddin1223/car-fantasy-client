import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {  useNavigate, useParams } from 'react-router-dom';

const ManageItem = () => {
    const navigate = useNavigate()
    const { itemId } = useParams()
    const [product, setProduct] = useState({})
    const { register, handleSubmit } = useForm();
    const url = `https://secret-crag-22323.herokuapp.com/inventory/${itemId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);
    const { _id, name, img, description, price, quantity, supplier, sold } = product;
    const onSubmit = (data, e) => {
        if (data.quantity < 0) {
            alert("please put a valid number")
            e.target.reset()
            return
        }
        else {
            const ammount = parseInt(data.quantity)
            const number = parseInt(quantity) + ammount;
            handleQuantity(number)
            e.target.reset()
        }
    }
    const handleDelivered = () => {
        const delivredItem = parseInt(quantity) - 1;
        handleQuantity(delivredItem);
    }
    const handleQuantity = (number) => {
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
                alert('sucessfuly updated')

            })
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
                        Total Sold: {sold}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {supplier}
                    </Card.Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='quantity' type="number" {...register("quantity")} />

                        <input type="submit" />
                    </form>
                    {
                        quantity < 1 ? <button className='btn btn-danger'>Sold Out</button> : <button onClick={handleDelivered} className=' m-2 btn btn-primary'>Delivered</button>
                    }
                </Card.Body>
            </Card>

        </div>
    );
};

export default ManageItem;