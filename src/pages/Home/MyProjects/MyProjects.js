import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import carShop from "../../../images/car shop.png"
import travelNetwork from "../../../images/travel network.png"
import doctorsPortal from "../../../images/doctors portal.png"
import medicare from "../../../images/medicare hospital.png"
import bookArchive from "../../../images/book archive.png"
import skill from "../../../images/skill up.png"

const MyProjects = () => {
    return (
        <div className="p-2" style={{ backgroundColor: "#070640" }}>
            <h2 className="fw-bold text-white ">My Projects</h2>

            <Row xs={1} md={3} className="g-3">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={carShop} />
                        <Card.Body>
                            <Card.Title>Car Shop</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/car-shop">Client Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/car-shop-server"> Server Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://car-shop-52dcd.web.app/">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is Full Stack web site with MERN dependencies.I used Material UI for designing UI.Its connected with mongodb database nad firebase authentication service.In this web site user authentication activated.
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={travelNetwork} />
                        <Card.Body>
                            <Card.Title>Travel Network</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/travel-network">Client Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/travel-network-server"> Server Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://shawon-travel-network-e834a.web.app/">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is Full Stack web site with MERN dependencies.I used React Bootstrap for  UI.Its connected with mongodb database  firebase authentication service.Its a complete Fullstack responsive web site
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={medicare} />
                        <Card.Body>
                            <Card.Title>Medicare Hospital</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/medicare-hospital">Client Site Code</a> </Card.Subtitle>

                                <Card.Subtitle> <a target='_blank' href="https://mediacare-hospital.web.app/home">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is a fullstack website with React JS and Node js.In this web site i have used firebase authentication and get data by node js server from database.This is simple responsive website about a medical hospital
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={doctorsPortal} />
                        <Card.Body>
                            <Card.Title>Doctors Portal</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/doctors-portal-client-site">Client Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/dcotors-portal-server"> Server Site Code</a> </Card.Subtitle>
                                <Card.Subtitle> <a target='_blank' href="https://doctors-portal-ef728.web.app/">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is Full Stack web site with MERN dependencies.I used Material UI for designing UI.Its connected with mongodb database nad firebase authentication service
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={skill} />
                        <Card.Body>
                            <Card.Title>Skill Up</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/skill-up">Client Site Code</a> </Card.Subtitle>

                                <Card.Subtitle> <a target='_blank' href="https://rejuyan-hossain-shawon-skill-up-website.netlify.app/">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is a simple web site of some course.You can purchase any course from this web site. It simply used bootstrap and react.Here is some user interaction as per need.This is simple responsive website.
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={bookArchive} />
                        <Card.Body>
                            <Card.Title>Book Archive</Card.Title>
                            <div className="d-flex justify-content-around ">
                                <Card.Subtitle> <a target='_blank' href="https://github.com/Rejuyan-Hossain-Shawon/book-archive">Client Site Code</a> </Card.Subtitle>

                                <Card.Subtitle> <a target='_blank' href="https://rejuyan-hossain-shawon-book-achive.netlify.app/">Live Site</a></Card.Subtitle>
                            </div>
                            <Card.Text>
                                This is a book website where you can search your book.This is worked with bootstrap.This is a responsive wen site of book library with API calling.The all list of book get from the free Online api.
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default MyProjects;