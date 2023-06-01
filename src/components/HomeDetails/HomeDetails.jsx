import React from 'react';
import HomeTop from '../HomeTop/HomeTop';
import HomeMid from '../HomeMid/HomeMid';
import HomeBottom from '../HomeBottom/HomeBottom';
import Footer from '../Footer/Footer';

const HomeDetails = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <HomeMid></HomeMid>
            <HomeBottom></HomeBottom>
            <Footer></Footer>
        </div>
    );
};

export default HomeDetails;