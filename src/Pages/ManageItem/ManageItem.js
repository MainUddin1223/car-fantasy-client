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
    const url = `http://localhost:5000/inventory/${itemId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);
    const { _id, name, img, description, price, quantity, supplier, sold } = product;
    const onSubmit = (data, e) => {
        const ammount = parseInt(data.quantity)
        const number = parseInt(quantity) + ammount;
        handleQuantity(number)
        e.target.reset()
        // navigate('/inventory')
    }
    const handleDelivered = () => {
        const delivredItem = parseInt(quantity) - 1;
        handleSold()
        handleQuantity(delivredItem)
    }
    const handleSold = () => {
        const soldItem = parseInt(sold) + 1;

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
                console.log(data);
                alert('sucessfuly updated')

            })
    }
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure???');
        if (proceed) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
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
                    <button onClick={handleDelete} className='m-2 btn btn-primary'>Delete</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageItem;