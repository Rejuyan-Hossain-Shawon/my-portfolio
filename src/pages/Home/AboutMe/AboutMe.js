import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../../images/new profile.png'

const AboutMe = () => {
    return (
        <div style={{ backgroundColor: "#070640" }} className="py-5">
            <Container>
                <Row className="d-flex justify-content-center align-items-center text-white">
                    <Col sm={12} md={6}>
                        <img src={profile} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <h4>My name is Rejuyan Hossain Shawon and from Sylhet.I am a web designer and developer. I am learning Web development for last  1 years.During Learning now i am exoert on Recat js,Node JS,Mongodb,Firebase and other react package also. I have good knowledge about Java Script,CSS,HTML,Bootstrap and other CSS framework like as Tailwind.</h4>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AboutMe;