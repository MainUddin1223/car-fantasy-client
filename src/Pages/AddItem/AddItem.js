import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const nameRef = useRef()
    const imgRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()
    const supplierRef = useRef()
    const emailRef = useRef();
    const handleAddItem = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplier = supplierRef.current.value;
        const email = emailRef.current.value;
        const data = {
            name, img, email, description, price, quantity, supplier,

        }

        const url = 'https://secret-crag-22323.herokuapp.com/inventory';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                alert('Item added')
            })

        e.target.reset()
        navigate('/inventory')

    }

    return (
        <div className='container'>
            <div className="add-item-container">
                <h1 className='add-item-header'>Store a Product</h1>
                <Form className='add-form' onSubmit={handleAddItem}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Product Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Control ref={imgRef} type="text" placeholder="Product Image" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">

                        <Form.Control ref={priceRef} type="text" placeholder="price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStoke">
                        <Form.Control ref={quantityRef} type="number" placeholder="Total Stoke" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control ref={descriptionRef} type="text" placeholder="Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSold">

                        <Form.Control ref={emailRef} value={user?.email} disabled required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control ref={supplierRef} type="text" placeholder="Supplier" required />
                    </Form.Group>
                    <Button className='add-button' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;