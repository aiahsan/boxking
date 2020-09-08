import React,{useState} from 'react';
import {Carousel,Button} from 'react-bootstrap';
import {FaPencilRuler} from "react-icons/fa";

export default ()=> {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="row mt-3 m-0-0" style={{backgroundColor:'white'}}>
            <div className="col-md-5 mt-5">
                <div className="ml-2rm text-first">

                <h1 className="txt">Just Simple. We'll Create Your <span className="prm-clr">Packaging</span> Fast</h1>
            <p className="text-description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <Button className="prm-color btn-cst-primary bt-tp10"><span><FaPencilRuler className="mr-3" /></span>CUSTOM DESIGN</Button>
                </div>
           

            </div>
            <div className="col-md-7">
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/slide.png')}
            alt="First slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/slide.png')}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../images/slide.png')}
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
   
            </div>
        </div>
        );
  }
  
  