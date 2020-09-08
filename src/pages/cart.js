import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/home/footer';
import Bread from '../components/breadCrum';
export default ()=>{
    return <>
    <NavBar/>
    <Bread/>

    <div class="ml-5 mr-5 box-cart mb-5">
        <div class="row">
        <div class="col-md-8">
                <div class="your-cart">
                    <h4 class="mt-3 mb-3 tag pl-4 ml-2">Your Cart</h4>
                    <hr class="new2"/>
                    <br/><br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="cart-box ml-4 mt-0" src={require('../images/packbox.png')} alt=""/>
                            </div>
                            <div class="col-md-5">
                                <h4 class="tag mb-0">1,000 Brochures DIN A5 <span
                                        class="tag custom-tag">(Customized)</span></h4>
                                <p class="brochures__des">Perfect binding135 and 250g/m<sup>2</sup> art paper 96 pages
                                    with cover</p>
                            </div>
                            <div class="col-md-3">
                                <div class="ml-5 mt-1 center">
                                    <div class="input-group">
                                        <button class="dec__btn">-</button>
                                        <input type="text" name="" class="no_input" value="1" min="0"/>
                                        <button class="inc__btn">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <h4 class="mt-2 mb-3 tag pl-4 ml-2">$500</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="your-cart box-cart">
                    <h4 class="mt-3 mb-3 tag pl-4 ml-2">Summary</h4>
                    <hr class="new2"/>
                    <br/><br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <h4 class="mb-3 tag pl-3">Subtotal</h4>
                                <h4 class="mb-3 tag pl-3">Delivery Charges</h4>
                                <h4 class="mb-3 tag pl-3">Shipping VAT</h4>
                            </div>
                            <div class="col-sm-3">
                                <h4 class="mb-3 tag pl-4 ml-2">$30</h4>
                                <h4 class="mb-3 tag pl-4 ml-2">$30</h4>
                                <h4 class="mb-3 tag pl-4 ml-2">$30</h4>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <h3 class="mb-3 tag pl-3 total_tag">Total</h3>
                                </div>
                            <div class="col-sm-3">
                                <h3 class="mb-3 tag pl-4 ml-1 total_tag">$90</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button type="button" class="mt-3 btn btn-outline-prm btn-block waves-effect">Proceed to Payment</button>
            </div>
        </div>
    </div>    <Footer/>
    </>
}