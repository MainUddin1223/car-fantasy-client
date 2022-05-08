import { TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyItem = ({ item }) => {
    const { _id, name, price, quantity } = item;
    const handleDelete = () => {
      const url=`https://secret-crag-22323.herokuapp.com/inventory/${_id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }
    return (
        <tr className='remove-table'>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> <p onClick={handleDelete} className='trash-icon'><TrashIcon /></p></td>
        </tr>
    );
};

export default MyItem;