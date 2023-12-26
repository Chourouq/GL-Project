import React from 'react';
import Splash from "./Pages/Splash.jsx";
import {useRoutes} from "react-router-dom";
import SignIn from "./Component/Authentication/SignIn.jsx";
import SignUp from "./Component/Authentication/SignUp.jsx";
import ForgetPassword from "./Component/Authentication/ForgetPassword.jsx";

function App() {
    return (
        <div>
            {useRoutes([
                {path: "/", element: <Splash/>},
                {path: "/Sign-in", element: <SignIn/>},
                {path: "/ForgetPassword", element: <ForgetPassword/>},
                {path: "/Sign-up", element: <SignUp/>},
            ])
            }
        </div>
    );
}

export default App;