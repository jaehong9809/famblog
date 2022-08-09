import React from "react";
import {Link} from "react-router-dom";
function Navigation(){

    return<div class="container  sticky-top bg-white">
    <header class="d-flex flex-wrap justify-content-between py-1 mb-4 border-bottom align-items-center">
      <Link to="/" className="d-flex align-items-center  text-decoration-none text-center">
        <img className="shadow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjFhpbmvP_dk4TGJL0JvviPDfNoC2L-zJIA&usqp=CAU" style={{height:"60px", width:"60px"}}></img>
        <p className="fs-1 text-success fw-bold px-3">Home</p>
      </Link>

      <ul class="nav nav-pills col col-6 justify-content-around">
        <li class="nav-item active"><Link to="/" className="text-decoration-none text-success"><h3>home</h3></Link></li>
        <li class="nav-item"><Link to="/father" className="text-decoration-none text-success"><h3>Father</h3></Link></li>
        <li class="nav-item"><Link to="/mother" className="text-decoration-none text-success"><h3>Mother</h3></Link></li>
        <li class="nav-item"><Link to="/brother" className="text-decoration-none text-success"><h3>Brother</h3></Link></li>
        <li class="nav-item"><Link to="/me" className="text-decoration-none text-success"><h3>Me</h3></Link></li>
      </ul>
    </header>
  </div>
}
export default Navigation;