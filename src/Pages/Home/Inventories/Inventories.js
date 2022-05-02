import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [items, setItems] = useInventory()
    return (
        <div>
            {
                items.map(item => <Inventory key={item._id} item={item}></Inventory>)
            }
            <Link to="/additem"><button>Stoke a new item</button></Link>
        </div>
    );
};

export default Inventories;