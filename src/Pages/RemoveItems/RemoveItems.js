import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../../Hooks/useInventory';
import RemoveItem from '../RemoveItem/RemoveItem'
import Spinners from '../Spinners/Spinners';
import './RemoveItems.css'
const RemoveItems = () => {
    const [items, setItems] = useInventory()
    return (
        <div className='container remove-section text-center'>
            <h1 className='remove-header'>Remove product from inventory</h1>
            <Table className='remove-table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Supplier</th>
                        <th className=''>Email</th>
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


        </div>
    );
};

export default RemoveItems;