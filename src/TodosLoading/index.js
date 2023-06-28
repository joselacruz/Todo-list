import React from "react";
import { TodoDraw } from "../TodoDraw";
import './TodosLoading.css';


function TodosLoading () {
    return (
<div >

<li className="loadingContainer">

<span className="loading-icon"></span> 
<p className="loading-line">
  <a> </a>
  <a> </a>
</p>
<span className="loading-icon"></span> 
</li>
<li className="loadingContainer">

<span className="loading-icon"></span> 
<p className="loading-line">
  <a> </a>
  <a> </a>
</p>
<span className="loading-icon"></span> 
</li>
<li className="loadingContainer">

<span className="loading-icon"></span> 
<p className="loading-line">
  <a> </a>
  <a> </a>
</p>
<span className="loading-icon"></span> 
</li>
<li className="loadingContainer">

<span className="loading-icon"></span> 
<p className="loading-line">
  <a> </a>
  <a> </a>
</p>
<span className="loading-icon"></span> 
</li>
</div>
       
    )
}

export {TodosLoading};