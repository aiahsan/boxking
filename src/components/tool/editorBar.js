import React from 'react';
export default ({handleUndo,handleRedo,handleDragControl,handleDelete,handleCopyRight,handleCopyLeft})=>{
    return  <div className="topEditor">
    <button className="btn img-Box-tool"><img src={require('../../images/icons/7.png')}/>
    </button>
   
    <button className="btn img-Box-tool"  onClick={()=>{handleCopyLeft()}}><img src={require('../../images/icons/9.png')}/>
    </button>
    <button className="btn img-Box-tool"  onClick={()=>{handleCopyRight()}}><img src={require('../../images/icons/10.png')}/>
    </button>
    <button className="btn img-Box-tool" onClick={()=>{handleDelete()}}><img src={require('../../images/icons/11.png')}/>
    </button>
    <button className="btn img-Box-tool" onClick={()=>{handleDragControl()}}><img src={require('../../images/icons/2.png')}/>
    </button>
    <button onClick={()=>{handleUndo()}} className="btn img-Box-tool"><img src={require('../../images/icons/5.png')}/>
    </button>
    <button onClick={()=>{handleRedo()}} className="btn img-Box-tool"><img src={require('../../images/icons/6.png')}/>
    </button>
    <button className="btn img-Box-tool"><img src={require('../../images/icons/8.png')}/>
    </button>
</div>


}