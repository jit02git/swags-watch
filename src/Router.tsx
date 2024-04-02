import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Detail from "./Details";
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Navbar/>} />
                <Route path="/detail" element={<Detail/>}></Route>
                {/* <Route path='/edit/:id' element={<Edit/>}></Route> */}
            </Routes>
        </Router>
    )
}
export default Routers;
