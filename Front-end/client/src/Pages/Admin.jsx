
import LawyerFrame from "../Component/Admin/LawyerFrame.jsx";
import LawyerFrame1 from "../Component/Admin/LawyerFrame1.jsx";
import LawyerFrame2 from "../Component/Admin/LawyerFrame2.jsx";
import LawyerFrame3 from "../Component/Admin/LawyerFrame3.jsx";
import LawyerFrame4 from "../Component/Admin/LawyerFrame4.jsx";
import LawyerFrame5 from "../Component/Admin/LawyerFrame5.jsx";
import LawyerFrame6 from "../Component/Admin/LawyerFrame6.jsx";
import LawyerFrame7 from "../Component/Admin/LawyerFrame7.jsx";
import NavBarUser from "../Component/User/NavBarUser.jsx";
import React from 'react';

function Admin() {
    return (
        <div>
            <NavBarUser/>
            <LawyerFrame/>
            <LawyerFrame1/>
            <LawyerFrame2/>
            <LawyerFrame3/>
            <LawyerFrame4/>
            <LawyerFrame5/>
            <LawyerFrame6/>
            <LawyerFrame7/>
        </div>
    );
}
export default Admin;
