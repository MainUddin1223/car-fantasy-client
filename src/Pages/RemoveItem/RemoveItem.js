import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './RemoveItem.css'

const RemoveItem = ({ item }) => {
    const [user] = useAuthState(auth)
    const userEmail = user?.email;
    const { _id, name, supplier, email, quantity } = item;
    const url = `https://secret-crag-22323.herokuapp.com/inventory/${_id}`;
    const handleDelete = () => {
        if (userEmail === email) {
            const proceed = window.confirm('Want to delete this product?');
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
        else {
            toast.warn('Please select you product', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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