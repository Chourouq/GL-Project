import React from 'react';
import NavBarLawyer from "../Component/Lawyer/NavBarLawyer.jsx";
import Skills from "../Component/Lawyer/Skills.jsx";
import ProfileHeader from "../Component/Lawyer/ProfileHeader.jsx";
import ExperiencesUpdated from "../Component/Lawyer/ExperienceUpdated.jsx";
import Reviews from "../Component/Lawyer/Reviews.jsx";
import Contact from '../Component/Lawyer/Contact.jsx';

//profile avocat (access to lawyer) updating profile functionality

function AvocatUpdated() {
    return (
        <div>
            <NavBarLawyer/>
            <ProfileHeader/>
            <Skills/>
            <ExperiencesUpdated/>
            <Reviews/>
            <Contact/>
        </div>
    );
}
export default AvocatUpdated;