import React from 'react';
import { Card } from 'react-bootstrap';
import './Owner.css'
const Owner = ({ owner }) => {
    const { name, designation, img } = owner;

    return (
        <div>
            <Card className='owner-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {designation}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Owner;