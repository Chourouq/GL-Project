
import LawyerFrame from "../Component/Admin/LawyerFrame.jsx";
import NavBarUser from "../Component/User/NavBarUser.jsx";
import React from 'react';

function Admin() {
    return (
        <div>
            <NavBarUser/>
            <LawyerFrame/>
            <LawyerFrame/>
            <LawyerFrame/>
            <LawyerFrame/>
            <LawyerFrame/>
            <LawyerFrame/>
            <LawyerFrame/>
        </div>
    );
}
export default Admin;
