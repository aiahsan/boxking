import React from 'react';
import Card from './whatYouCard'
export default ()=>{
    return <>
    <div className="box-container1 pt-5">
    <p className="whatwe-head">What do you get</p>
    <p className="whatwe-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
   <div className="container whatWegetMargin">
   <div className="row">
        <div className="col-md-4 pl-1">
            <Card head="Transparent Prices" img={require('../../images/dltag.png')} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </div>
        <div className="col-md-4">
        <Card head="Print Brilliance" img={require('../../images/prnt.png')} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </div>
        <div className="col-md-4">
        <Card head="Reseller Benefits" img={require('../../images/seo.png')} title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>
        </div>
    </div>
   </div>
    </div>
    </>
}