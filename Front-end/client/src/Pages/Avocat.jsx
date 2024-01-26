import React from 'react';
import NavBarLawyer from "../Component/Lawyer/NavBarLawyer.jsx";
import Skills from "../Component/Lawyer/Skills.jsx";
import ProfileHeader from "../Component/Lawyer/ProfileHeader.jsx";
import Experiences from "../Component/Lawyer/Experiences.jsx";
import Reviews from "../Component/Lawyer/Reviews.jsx";
import Contact from '../Component/Lawyer/Contact.jsx';

//profile avocat (access to lawyer) updating profile functionality

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