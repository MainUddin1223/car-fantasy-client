import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://secret-crag-22323.herokuapp.com/myItems?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            });
            setMyItems(data)
        }
        getMyItems()
    },
        [user,myItems])
    return (
        <div className='container p-5 my-4 text-center remove-section'>
            <h1 className='p-4'>
                My Items
            </h1>
            <Table className='remove-table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => <MyItem key={item._id} item={item}></MyItem>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;
