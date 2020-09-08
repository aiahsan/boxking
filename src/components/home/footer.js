import React from 'react';
export default () => {
    return <footer className="page-footer font-small pt-4">


        <div className="pl-5 pr-5 text-center text-md-left">

            <div className="row text-center text-md-left mt-3 pb-3">

                <div className="col-md-4 mx-auto mt-2 mb-4">
                    <img src={require('../../images/logo.png')} style={{ width: 196 }} alt="logo" className="footerLogo" />
                    <p className="text-center text-md-left mt-2 footerParagraph">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur
              adipisicing elit.</p>
                    <p className="text-center text-md-left footerParagraph">© 2020-2025
            </p>
                </div>



                <div className="col-md-2  mx-auto mt-4 mb-4">
                    <h6 className="mb-4 font-weight-bold footerHeading">Popular Products</h6>


                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks" >lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>

                </div>
                <div className="col-md-2 col-lg-2 col-sm-2 mx-auto mt-4 mb-4">
                    <h6 className="mb-4 font-weight-bold footerHeading">Quick Links</h6>

                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>
                    <a href="#!" className="footerLinks">lorem ipsum</a>

                </div>

                <div className="col-md-4 mx-auto mt-4 mb-4">
                    <h6 className="mb-4 font-weight-bold footerHeading">Reach To Us</h6>
                    <p className="mb-3 font-weight-bold contact">
                        <i className="fa fa-phone contactIcon" aria-hidden="true"></i> &nbsp 043 588 00 88</p>
                    <p className="mb-3 contact">
                        <i className="fa fa-envelope contactIcon" aria-hidden="true"></i> &nbsp contact@boxking.com</p>
                    <a href=""><i className="fab fa-facebook-f social-icon" aria-hidden="true"></i></a>
                    <a href=""><i className="fab fa-linkedin-in social-icon" aria-hidden="true"></i></a>
                    <a href=""><i className="fab fa-twitter social-icon" aria-hidden="true"></i></a>
                    <a href=""><i className="fab fa-youtube social-icon" aria-hidden="true"></i></a>

                </div>


            </div>
        </div>

    </footer>











}