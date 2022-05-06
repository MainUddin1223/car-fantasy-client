import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
const Inventories = () => {
    const [pageSize, setPageSize] = useState(5)
    const [productCount, setProductCount] = useState(0)
    const [page, setPage] = useState(0)
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [page, pageSize])

    useEffect(() => {
        fetch('http://localhost:5000/inventoryCount')
            .then(res => res.json())
            .then(data => {
                console.log(data.count);
                const count = data.count;
                const pages = Math.ceil(count / pageSize);
                setProductCount(pages);
            })
    }, [pageSize]);
    const handlePagination = (pd) => {
        setPage(pd)
        window.scrollTo(0, 0)
    }

    return (
        <div className='container'>
            <div className="inventory-section">
                <h1 className='inventory-header'>Our Inventory</h1>
                <div className="inventory-container">
                    {
                        items.map(item => <Inventory key={item._id} item={item}></Inventory>)
                    }
                </div>
                <div className='pagination'>
                    <div>
                        <button onClick={
                            page > 0 ? () => handlePagination(page - 1) : page
                        }>Prev</button>
                        {
                            [...Array(productCount).keys()]
                                .map(product => <button key={product}
                                    className={page === product ? 'selected' : ''}
                                    onClick={() => handlePagination(product)}
                                >{product + 1}</button>)
                        }
                        <button onClick={
                            page < productCount - 1 ?
                                () => handlePagination(page+1) : page}>
                            Next</button>
                    </div>
                    <select className='mx-2' onChange={e => setPageSize(e.target.value)} name="" id="">
                        <option value="5">5</option>
                        <option value="10" defaultValue>10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Inventories;