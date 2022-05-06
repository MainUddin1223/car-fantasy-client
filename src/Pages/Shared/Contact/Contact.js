import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import contact from '../../../images/contact52.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>

            <div className="contact-section">
                <h1 className='contact-header'>Contact Us</h1>
                <div className="contact-container">
                    <div className="contact-img">
                        <img className='img-fluid' src={contact} alt="" />
                    </div>
                    <div className='contact-form'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Control type="text" placeholder="Enter address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='contact-button' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <div className='social-contact-divider'>
                            <hr />
                            <p>Or</p>
                            <hr />
                        </div>
                        <div className='social-div'>
                            <a href="https://www.linkedin.com/company/programminghero/" target="_blank"><i className=" bg-primary fa fa-brands fa-linkedin social-icon fs-2"></i></a>

                            <a href="https://www.facebook.com/programmingHero" target="_blank"><i className=" bg-primary fa fa-brands fa-facebook-square social-icon fs-2"></i></a>
                            <a href="https://www.facebook.com/programmingHero" target="_blank"><i className="bg-primary fa fa-brands fa-twitter-square social-icon fs-2"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;