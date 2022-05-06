import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState({})
    const { register, handleSubmit } = useForm();
    const url = `https://secret-crag-22323.herokuapp.com/inventory/${itemId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);
    const { name, email, img, price, quantity, supplier } = product;
    const onSubmit = (data, e) => {
        if (data.quantity < 0 || data.quantity == '') {
            alert("please put a valid number")
            e.target.reset()
            return
        }
        else {
            const ammount = parseInt(data.quantity)
            const number = parseInt(quantity) + ammount;
            const successMessage='Product updated successfully';
            handleQuantity(number,successMessage)
            e.target.reset()
        }
    }
    const handleDelivered = () => {
        const delivredItem = parseInt(quantity) - 1;
        const successMessage='Product delivered successfully';
        handleQuantity(delivredItem,successMessage);
    }
    const handleQuantity = (number,message) => {
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
                alert(message)

            })
    }

    return (
        <div className='container'>
            <div className='manage-quantity-container'>
                <h1 className='manage-inventory-header'>Manage your Product</h1>
                <div className='manage-inventory-card'>
                    <div>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div>
                        <div className='manage-inventory-detail'>
                            <h1>Product : {name}</h1>
                            <h4>Provider : {supplier}</h4>
                            <h5>Price : ${price}</h5>
                            <h5>Quantity : {quantity}</h5>
                            <h6>Provider Email : {email}</h6>
                            <form className='update-input-field' onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='quantity' type="number" {...register("quantity")} />

                                <input className='update-stoke-button' type="submit" value='Update Stoke' />
                            </form>
                            {
                                quantity < 1 ? <button className='btn btn-danger '>Sold Out</button> : <button onClick={handleDelivered} className=' m-2 btn btn-primary'>Delivered</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;