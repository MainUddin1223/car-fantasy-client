import React from 'react';
import { Card } from 'react-bootstrap';
import './Owner.css'
const Owner = ({ owner }) => {
    const { name, designation, img } = owner;

    return (
        <div className='col-lg-6 col-sm-12'>
            <div className='owner-card-div '>

            <Card className='owner-card'>
                <Card.Img className='owner-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {designation}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
        </div>

    );
};

export default Owner;