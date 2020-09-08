import React from 'react';
export default ({img,title,head})=> <div className="product-card">
    <img className=""
  src={img}
  alt="Card image cap " />
  <h4 className="card-title text-center card-box-h">{head}</h4>
<p className="card-text text-center card-box-p">{title}</p>
<div style={{display:'flex',justifyContent:'center'}}>
    <a className="btn prm-color mr-2 color-white">Customize</a>
      <a className="btn prm-color color-white "><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </div>
</div>


/*
<div className="">
<div className="brd-none card mb-2">
  <img className="box-img"
  src={img}
  alt="Card image cap " />
  <div className="card-body">
<h4 className="card-title text-center card-box-h">{head}</h4>
<p className="card-text text-center card-box-p">{title}</p>
    <div style={{display:'flex',justifyContent:'center'}}>
    <a className="btn prm-color mr-2 color-white">Customize</a>
      <a className="btn prm-color color-white "><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </div>
    </div>
  </div>
</div>
*/