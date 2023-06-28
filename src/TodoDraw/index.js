import React from "react";
import './TodoDraw.css';

function TodoDraw ({loading}) {

    let classDrawCircleLoad;

    if(loading) {
        classDrawCircleLoad = "draw-circle-active";
    }
    else {
        classDrawCircleLoad = "";
    }

    return (
        <div className="todoDraw-figure-container">
        <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>
       <div className='todoDraw-figure'>
           <div className= {`draw-figure__circle ${classDrawCircleLoad}`} ></div>
          <div className="draw-figure__line"></div>
       </div>

      </div>
    );
}

export {TodoDraw};