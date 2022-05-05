import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../Hooks/useInventory';
import RemoveItem from '../RemoveItem/RemoveItem'

const RemoveItems = () => {
    const [items, setItems] = useInventory()
    return (
        <div className='container text-center'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Supplier</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <RemoveItem key={item._id} item={item}></RemoveItem>)
                    }
                </tbody>
            </Table>
            <h1>This is remove Items</h1>


        </div>
    );
};

export default RemoveItems;