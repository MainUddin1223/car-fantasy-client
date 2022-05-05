import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './RemoveItem.css'

const RemoveItem = ({ item }) => {
    const { _id, name, supplier, email, quantity } = item;
    const url = `https://secret-crag-22323.herokuapp.com/inventory/${_id}`;
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
    }
    return (
        <tr className='remove-table'>
            <td>{name}</td>
            <td>{supplier}</td>
            <td className='remove-table'>{email}</td>
            <td>{quantity}</td>
            <td> <p onClick={handleDelete} className='trash-icon'><TrashIcon /></p></td>
        </tr>

    );
};

export default RemoveItem;