import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaPencilRuler } from "react-icons/fa";

export default () => {

    return (<>
        <div className="box-container bg-box-color">
            <div className="row ">
                <div className="col-md-6 ">
                    <img style={{ width: '100%' }} src={require('../../images/Capture.JPG')} />
                </div>
                <div className="col-md-6">
                    <div className="tag-box">
                        <h4 className="mb-0 tag pl-4">Features</h4>
                        <div className="tag-box-line1"></div>
                        <div className="tag-box-line2"></div>
                    </div>
                    <h1 className="tag-head pl-4 pt-2 pb-2">We Deliver The Promising Features Worldwide That People Love</h1>
                    <p className="tag-para pl-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
            </div>
        </div>
        <div className="box-container1   ">
            <div className="row ">

                <div className="col-md-6">
                    <div className="tag-box">
                        <h4 className="mb-0 tag pl-4">Quick Learn</h4>
                        <div className="tag-box-line1"></div>
                        <div className="tag-box-line2"></div>
                    </div>
                    <h1 className="tag-head pl-4 pt-2 pb-2">Create yourcustom design online</h1>
                    <p className="tag-para pl-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="col-md-6 ">
                    <img style={{ width: '100%' }} src={require('../../images/Background.png')} />
                    
                </div>
            </div>
        </div>
    </>

    );
}

