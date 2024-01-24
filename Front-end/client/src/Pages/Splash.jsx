import React from 'react';
import Welcome from "../Component/Spalsh/Welcome.jsx";
import Footer from "../Component/Spalsh/Footer.jsx";
import Navbar from "../Component/Spalsh/Navbar.jsx";
import Lawyers from "../Component/Spalsh/Lawyers.jsx";
import Aboutus from "../Component/Spalsh/Aboutus.jsx";
import Contact from "../Component/Spalsh/Contact.jsx";
function Splash() {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <Lawyers/>
            <Aboutus/>
            <Contact/>
        </div>
    );
}
export default Splash;