import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/home/footer';
import Bread from '../components/breadCrum';
export default ()=>{
    return <>
    <NavBar/>
    <Bread/>
    <div className="ml-5 mr-5 box-cart mb-5">
    <div className="container">
            <div className="row">
                <div className="col-md">
                    <img className="ml-5 big-img" src={require('../images/bigbox1.png')} alt="" />
                </div>
                <div className="col-md">
                    <div className="your-cart design-cart">
                        <div className="row">
                            <div className="col-md">
                                <h4 className="mt-3 mb-0 pt-4 tag pl-4 ml-2">Product</h4>
                            </div>
                            <div className="col-md">
                                <p className="mt-3 pt-4 mb-0 tag mr-5 pncl">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                        <hr className="new2" />

                        <div className="mt-4 container">
                            <div className="row">
                                <div className="col-md">
                                    <h4 className="mb-3 tag pl-3">Size</h4>
                                    <h4 className="mb-3 tag pl-3">Material</h4>
                                    <h4 className="mb-3 tag pl-3">Quantity</h4>
                                    <h4 className="mb-3 tag pl-3">Unit Cost</h4>
                                    <h4 className="mb-3 tag pl-3">Printing Company</h4>
                                </div>
                                <div className="col-md design-info">
                                    <h4 className="mb-3 tag pl-4 ml-2">W34 L14 H112 LH11</h4>
                                    <h4 className="mb-3 tag pl-4 ml-2">Printed Stock</h4>
                                    <h4 className="mb-3 tag pl-4 ml-2">250</h4>
                                    <h4 className="mb-3 tag pl-4 ml-2">$20</h4>
                                    <h4 className="mb-3 tag pl-4 ml-2">Company Name</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 your-cart design-cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <p className="mt-3 pl-3">Have coupon..?</p>
                                    <form className="ml-3">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <input type="text" className="form-control gray_1"
                                                    placeholder="Coupon Code"/>
                                            </div>
                                            

                                            <div className="col-md-1">
                                                <button className="gray_1 coupon_code" type="button">Apply Code</button>
                                                <br/><br/>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-8">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h4 className="mb-3 tag pl-3">Subtotal</h4>
                                            <hr/>
                                            <h4 className="mb-3 tag pl-3">Delivery Charges</h4>
                                            <hr/>
                                            <h4 className="mb-3 tag pl-3 total_tag">Total Cost</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <h4 className="mb-3 tag pl-4 ml-2">$30</h4>
                                            <hr/>
                                            <h4 className="mb-3 tag pl-4 ml-2">$30</h4>
                                            <hr/>
                                            <h4 className="mb-3 tag pl-3 total_tag ml-2">$30</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <button type="button" className="mt-3 btn draft_btn btn-block waves-effect">Save as
                                    draft</button>
                            </div>
                            <div className="col-md">
                                <button type="button" className="mt-3 btn colr btn-block waves-effect" style={{color:"white"}}>Proceed to
                                    Payment</button>

                            </div>
                        </div>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        </div>
     </div>    <Footer/>
    </>
}