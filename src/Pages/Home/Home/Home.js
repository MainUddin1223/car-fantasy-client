import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Owner from '../Owner/Owner';
import './Home.css'
import wareHousePic from '../../../images/warehouse.jpg'

const Home = () => {
    const [items, setItems] = useInventory();
    const limitedItems = items.slice(0, 6);
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/owner')
            .then(res => res.json())
            .then(data => setOwners(data))
    }, [])

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/87L1Vcv/blue-jeep-parking-public-zone-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/DCmQw7h/chuttersnap-gts-Eh4g1lk-unsplash-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  slider-img"
                        src="https://i.ibb.co/rfr5C4Y/blue-sport-sedan-parked-yard-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container'>
                <h1 className='owner-header'>We are always here to provide best service to you</h1>
                <div className="owner-container">
                    {
                        owners.map(owner => <Owner key={owner._id} owner={owner}></Owner>)
                    }
                </div>
            </div>
            <div className='container'>
                <div className="welcome-container">
                    <div className='welcome-description'>
                        <h1>Welcome to Car fantasy</h1>
                        <h3>It is a reliable Warehouse.You can store your Car in it</h3>
                        <Button variant="primary">Learn More</Button>
                    </div>
                    <div className='welcome-image'>
                        <img src={wareHousePic} alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='item-container'>
                    {
                        limitedItems.map(item => <Card key={item._id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Price: {item.price}
                                </Card.Text>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    Quantity: {item.quantity}
                                </Card.Text>
                                <Card.Text>
                                    Supplier: {item.supplier}
                                </Card.Text>
                                <Link to={`/inventory/${item._id}`}><Button variant="primary">Stoke Update</Button></Link>
                            </Card.Body>
                        </Card>)
                    }
                </div>
                <Link to='/inventory'>See More</Link>
            </div>
        </div>
    );
};

export default Home;