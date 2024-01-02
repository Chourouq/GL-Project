import React from 'react';
import NavBarLawyer from "../Component/Lawyer/NavBarLawyer.jsx";
import Skills from "../Component/Lawyer/Skills.jsx";
import Experiences from "../Component/Lawyer/Experiences.jsx";
import Reviews from "../Component/Lawyer/Reviews.jsx";

function Avocat() {
    return (
        <div>
            <NavBarLawyer/>
            <Skills/>
            <Experiences/>
            <Reviews/>
        </div>
    );
}
export default Avocat;