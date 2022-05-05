
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inventory.css'


const Inventory = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier, email } = item;
    return (
        <div className='inventory-item'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        In Stoke: {quantity}
                    </Card.Text>
                    <Card.Text>
                        Email:{email}
                    </Card.Text>
                    <Card.Text>
                        Description:{description}
                    </Card.Text>
                    <Card.Text>
                        {supplier}
                    </Card.Text>
                    <Link to={`/inventory/${_id}`}><Button variant="primary">Stoke Update</Button></Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Inventory;