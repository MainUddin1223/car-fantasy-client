import React from 'react';
import useInventory from '../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [items, setItems] = useInventory()
    return (
        <div>
            {
                items.map(item => <Inventory key={item._id} item={item}></Inventory>)
            }
        </div>
    );
};

export default Inventories;