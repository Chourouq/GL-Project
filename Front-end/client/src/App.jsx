import React from 'react';
import Splash from "./Pages/Splash.jsx";
import Avocat from "./Pages/Avocat.jsx"
import {useRoutes} from "react-router-dom";
import SignIn from "./Component/Authentication/SignIn.jsx";
import SignUp from "./Component/Authentication/SignUp.jsx";
import ForgetPassword from "./Component/Authentication/ForgetPassword.jsx";
import Admin from "./Pages/Admin.jsx";
import SearchResults from "./Pages/SearchResults.jsx";
import AvocatPovUser from "./Pages/AvocatPovUser.jsx";
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
        <div>
            {useRoutes([
                {path: "/", element: <Splash/>},
                {path: "/Sign-in", element: <SignIn/>},
                {path:"/Avocat",element:<Avocat/>},
                {path:"/admin",element:<Admin/>},
                {path: "/SearchResults", element: <SearchResults/>},
                {path: "/AvocatPovUser", element: <AvocatPovUser/>},
                {path: "/ForgetPassword", element: <ForgetPassword/>},
                {path: "/Sign-up", element: <SignUp/>},
            ])
            }
        </div>
        </AuthProvider>
    );
}

export default App;
