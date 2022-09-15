import React from 'react';
import Services from '../../Shared/Header/Services/Services';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;