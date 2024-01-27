import React from 'react';
import NavBarUser from "../Component/User/NavBarUser.jsx";
import Skills from "../Component/Lawyer/Skills.jsx";
import ProfileHeader from "../Component/User/ProfileHeader.jsx";
import Experiences from "../Component/Lawyer/Experiences.jsx";
import Reviews from "../Component/Lawyer/Reviews.jsx";
import Contact from '../Component/Lawyer/Contact.jsx';
import ReviewUser from '../Component/User/ReviewUser.jsx'
//profile avocat of the user (with the functionality of reservation included)
function AvocatPovUser() {
    return (
        <div>
            <NavBarUser/>
            <ProfileHeader/>
            <Skills/>
            <Experiences/>
            <ReviewUser/>
            <Reviews/>
            <Contact/>
        </div>
    );
}
export default  AvocatPovUser;