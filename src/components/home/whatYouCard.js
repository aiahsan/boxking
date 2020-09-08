import React from 'react';
export default ({title,img,head})=>{
return <div className="whatyouGetCard mt-5">
<img src={img} />
<h4 className="card-box-h mt-4">{head}</h4>
<p className=" card-box-p" style={{marginLeft:5,marginRight:5}}>{title}</p>
  
</div>
}