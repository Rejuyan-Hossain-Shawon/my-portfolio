import React from 'react';
import HomeBanner from '../Homebanner/HomeBanner';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Navbar from '../HomeNavbar/HomeNavbar';
import backgroundImg from '../../../images/background.jpg'
import HomeService from '../HomeService/HomeService';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import AboutMe from '../AboutMe/AboutMe';
const Home = () => {
    const bg = {
        backgroundImage: `url(${backgroundImg})`
    }
    return (
        <>
            <div style={bg}>
                <HomeNavbar></HomeNavbar>
                <HomeBanner></HomeBanner>

            </div>
            <AboutMe></AboutMe>
            <HomeService></HomeService>
            <MyProjects></MyProjects>
            <Footer></Footer>

        </>
    );
};

export default Home;