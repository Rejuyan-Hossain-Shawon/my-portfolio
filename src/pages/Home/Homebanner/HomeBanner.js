import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import profile from '../../../images/WP_20190224_004-removebg-preview.png'


const HomeBanner = () => {

    return (
        <div className='pt-2'>
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={12} md={6}>
                        <h2 className='fw-bolder text-white '>I am Rejuyan Hossain Shawon</h2>

                        <h4 className="fw-bold text-white">A Full Stack MERN Web Developer</h4>
                        <a target='_blank' href="https://docs.google.com/document/d/1hoZet4dPvc8rEfyc26r3R-x8dtHZDZRRxbE_Dg9VydI/edit?usp=sharing"><Button className="px-5 mt-3">Resume</Button></a>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src={profile} alt="" />
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default HomeBanner;