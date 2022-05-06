import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../Hooks/useInventory';
import Owner from '../Owner/Owner';
import './Home.css'
import wareHousePic from '../../../images/warehouse.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from '../../Shared/Contact/Contact';

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [items, setItems] = useInventory();
    const limitedItems = items.slice(0, 6);
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        fetch('https://secret-crag-22323.herokuapp.com/owner')
            .then(res => res.json())
            .then(data => setOwners(data))
    }, [])
    return (
        <div className='carousel-container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/87L1Vcv/blue-jeep-parking-public-zone-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Experience the Authentic Services</h3>
                        <p>We do not compromise with service.We always provide Authentic service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://i.ibb.co/DCmQw7h/chuttersnap-gts-Eh4g1lk-unsplash-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Experience the Authentic Services</h3>
                        <p>We do not compromise with service.We always provide Authentic service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  slider-img"
                        src="https://i.ibb.co/rfr5C4Y/blue-sport-sedan-parked-yard-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Experience the Authentic Services</h3>
                        <p>We do not compromise with service.We always provide Authentic service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container '>
                <div className="owner-section">
                    <h1 className='owner-header'>We are always here to provide best service to you</h1>
                    <div className="owner-container " data-aos="fade-up">
                        {
                            owners.map(owner => <Owner key={owner._id} owner={owner}></Owner>)
                        }
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='parallax'>

                </div>

            </div>
            <div className='container'>
                <div className="welcome-container">
                    <div className='welcome-description ' data-aos="fade-right">
                        <h1>Welcome to Car fantasy</h1>
                        <h3>It is a reliable Warehouse.You can store your Car in it</h3>
                        <Button variant="primary">Learn More</Button>
                    </div>
                    <div className='welcome-image' data-aos="fade-left">
                        <img className='img-fluid mx-auto d-block' src={wareHousePic} alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="item-section">
                    <h1 className='stored-item-header'>Stored Items</h1>
                    <div className='item-container '>
                        {
                            limitedItems.map(item => <Card className='stored-item ' data-aos="fade-up" key={item._id}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Price: {item.price}
                                    </Card.Text>
                                    <Card.Text>
                                        Description:  {item.description}
                                    </Card.Text>

                                    <Card.Text>
                                        Quantity: {item.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        Supplier: {item.supplier}
                                    </Card.Text>
                                    <Card.Text>
                                        Supplier Email:  {item.email}
                                    </Card.Text>
                                    <Link to={`/inventory/${item._id}`}><Button variant="primary">Stoke Update</Button></Link>
                                </Card.Body>
                            </Card>)
                        }

                    </div>
                    <h4 className='stored-item-header'><Link className='explore-link' to='/inventory'>Explore More</Link></h4>
                    <div className='m-auto m-2'>

                    </div>
                </div>

            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;