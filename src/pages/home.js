import React from "react";
import Navbar from '../components/navbar';
import Strip from '../components/strip';
import FirstCom from '../components/home/firstCom';
import Second from '../components/home/featuresbox';
import Footer from '../components/home/footer';
import FeatureProducts from '../components/home/featureProduct';
import WhatWeGet from '../components/home/whatWeGet';
import Sub from '../components/home/subscribe'
export default
()=> {
  return (
   <>
    <Strip/>
   <Navbar/>
   <FirstCom/>
   <Second/>
   <FeatureProducts/>
   <WhatWeGet/>
   <Sub/>
  <Footer/>
   </>
  );
}

