import React from 'react';
import Banner from '../Components/HomeComponents/Banner/Banner';
import HowItWorks from '../Components/HomeComponents/HowItWorks/HowItWorks';
import OurServices from '../Components/HomeComponents/OurServices/OurServices';
import SalesTeams from '../Components/HomeComponents/SalesTeams/SalesTeams';
import Features from '../Components/HomeComponents/Features/Features';
import CustomerSatisfaction from '../Components/HomeComponents/CustomerSatisfaction/CustomerSatisfaction';
import CustomerReview from '../Components/HomeComponents/CustomerReview/CustomerReview';
import FaQustion from '../Components/HomeComponents/FaQustion/FaQustion';

const Home = () => {
    return (
        <div className=' min-h-screen mt-5'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <SalesTeams></SalesTeams>
            <Features></Features>
            <CustomerSatisfaction></CustomerSatisfaction>
            <CustomerReview></CustomerReview>
            <FaQustion></FaQustion>
        </div>
    );
};

export default Home;