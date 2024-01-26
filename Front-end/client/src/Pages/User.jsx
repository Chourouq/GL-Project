import React from 'react';
import NavBarUser from "../Component/User/NavBarUser.jsx";
import Welcome from "../Component/Spalsh/Welcome.jsx";
import Lawyers from "../Component/Spalsh/Lawyers.jsx";
import Aboutus from "../Component/Spalsh/Aboutus.jsx";
import Contact from "../Component/Spalsh/Contact.jsx";


function Splash() {
    return (
        <div>
            <NavBarUser/>
            <Welcome/>
            <Lawyers/>
            <Aboutus/>
            <Contact/>
        </div>
    );
}
export default Splash;