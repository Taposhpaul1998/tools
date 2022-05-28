import React from 'react';
import Footer from '../../Shear/Footer/Footer';
import Banner from '../Banner/Banner';
import Catagorys from '../Catagory/Catagorys';
import Reviews from '../Review/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='bg-teal-600'>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Catagorys></Catagorys>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;