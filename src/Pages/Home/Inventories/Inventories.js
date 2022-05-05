import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
const Inventories = () => {
    const [items, setItems] = useInventory()
    return (
        <div className='container'>
            <div className="inventory-section">
                <h1 className='inventory-header'>Our Inventory</h1>
                <div className="inventory-container">
                    {
                        items.map(item => <Inventory key={item._id} item={item}></Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;