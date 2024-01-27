import React from 'react';
import NavBarLawyer from "../Component/Lawyer/NavBarLawyer.jsx";
import Skills from "../Component/Lawyer/Skills.jsx";
import ProfileHeader from "../Component/Lawyer/ProfileHeader.jsx";
import Experiences from "../Component/Lawyer/Experiences.jsx";
import Reviews from "../Component/Lawyer/Reviews.jsx";
import Contact from '../Component/Lawyer/Contact.jsx'

function Avocat() {
    return (
        <div>
            <NavBarLawyer/>
            <ProfileHeader/>
            <Skills/>
            <Experiences/>
            <Reviews/>
            <Contact/>
        </div>
    );
}
export default Avocat;