import React from "react";
import Navbar from "./Navbar";
import Coursel from "./Coursel";
import Cards from "./Cards";
import Join from "./Join";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <> <Navbar/>
           <Routes>
               <Route exact path="/" element={<Coursel/>}/>
               <Route exact path="/about" element={<Cards/>}/>
               <Route exact path="/join" element={<Join/>}/>
               <Route exact path="/contact" element={<Contact/>}/>
           </Routes>
           
        </>
    );
}

export default App;