import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
        [user])
    return (
        <div>
            <h1>This is my Items{myItems.length}</h1>
        </div>
    );
};

export default MyItems;
