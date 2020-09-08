import React from 'react';
export default ()=> <div className="col-md-3 card-Box">
<div className="brd-none card mb-2">
  <img className="box-img"
  src={require('../../images/packbox.png')}
  alt="Card image cap " />
  <div className="card-body">
    <h4 className="card-title text-center card-box-h">1,000 brochures DIN A5</h4>
    <p className="card-text text-center card-box-p">Perfect binding135 and 250 g / m² art paper 96 pages with cover</p>
    <div style={{display:'flex',justifyContent:'center'}}>
    <a className="btn prm-color mr-2 color-white">Customize</a>
      <a className="btn prm-color color-white "><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </div>
    </div>
  </div>
</div>