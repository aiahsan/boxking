import React,{useState} from 'react';
import { Button,Carousel} from 'react-bootstrap';
import CardBox from './cardBox';
export default ()=> 

{

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
return <>
<div className="box-container1 product-Head">
<div className="">
<div className="tag-box">
         <h4 className="mb-0 tag pl-4">Products</h4>
         <div className="tag-box-line1"></div>
         <div className="tag-box-line2"></div>
     </div>
     <h1 className="tag-head pl-4 pt-2 pb-2">Our Featured Products</h1>

</div>
<button className="btn btn-outline-prm btn-fndm" >FIND MORE</button>
</div>
    <div className="box-container1">
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
         <div className="row">
         <CardBox/>
         <CardBox/>
         <CardBox/>
         <CardBox/>
         
         </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="row">
         <CardBox/>
         <CardBox/>
         <CardBox/>
         <CardBox/>
         
         </div>
        </Carousel.Item>
        <Carousel.Item>
          
        <div className="row">
         <CardBox/>
         <CardBox/>
         <CardBox/>
         <CardBox/>
         
         </div>
        </Carousel.Item>
      </Carousel>

    </div>
</>
}