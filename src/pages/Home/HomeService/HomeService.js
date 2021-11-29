import React from 'react';
import "./HomeService.css"
import { Card, Col, Row } from 'react-bootstrap';


const HomeService = () => {

    return (
        <div className="p-2" style={{ backgroundColor: "#070640" }}>
            <h2 className="fw-bold text-white ">My Services</h2>
            <Row xs={1} md={3} className="g-3 mt-1">

                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Web Design</Card.Title>
                            <Card.Text>
                                React is a JavaScript library that makes it easier to create interactive UIs. You may find that hard to believe, so lets break it down.I use React for design the website and more interactive.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                                I am a full stack MERN web developer.I have knowledge about React JS/ Node JS/ Express/ MongoDB/ Firebase/ HTML/ CSS/ Java Script/ Bootstrap  /  Material UI Design  / Tailwind CSS.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Creative Design</Card.Title>
                            <Card.Text>
                                Creative design is computer generated imagery. The creative design includes designs that are unique, effective and memorable. It involves going out of my way to make it unique
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Responsive Design</Card.Title>
                            <Card.Text>
                                Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes.I m good at making a website responsive as per my need.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>Debug and Analyse</Card.Title>
                            <Card.Text>
                                Debugging  used for decades to describe all sorts of programming errors .Analysis is the process of gathering and comparing information about the web and its operation and use in order to improve the web's overall.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>24/Support</Card.Title>
                            <Card.Text>
                                I am providing Web Support is the ability for providing users an avenue for reporting system related issues such as: content or data errors. content or data not appearing correctly.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>
    );
};

export default HomeService;