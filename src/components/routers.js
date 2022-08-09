import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Brother from "./Brother";
import Father from "./Father";
import Footer from "./Footer";
import Home from "./Home";
import Me from "./Me";
import Mother from "./Mother";
import Navigation from "./Navigation";

function Approuter(){

    return(
    <Router>
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/father" element={<Father></Father>}></Route>
            <Route path="/mother" element={<Mother></Mother>}></Route>
            <Route path="/brother" element={<Brother></Brother>}></Route>
            <Route path="/me" element={<Me></Me>}></Route>
        </Routes>   
        <Footer></Footer>
    </Router>)
}

export default Approuter;