import React, { useState } from 'react';
import bg from "../../assets/welcome.svg";
import { BsPerson, BsUnlock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const signInWithGoogle = () => {
        console.log("Sign in with Google");
        // Add your Google sign-in logic here for the back end team
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const goToAvocat = () => {
        // Check if the entered email contains specific strings
        if (enteredEmail.includes("/user")) {
            navigate('/');
        } else if (enteredEmail.includes("/avocat")) {
            navigate('/Avocat');
        } else if (enteredEmail.includes("/admin")) {
            navigate('/Admin');
        } else {
            // Handle other cases or show an error message
            console.error("Invalid email format");
        }
    };

    return (
        <div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex justify-center items-center h-screen px-2">
                <form className="max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-3xl p-4">
                    <h1 className="text-blue-800 text-3xl font-bold pt-3">Connexion</h1>
                    <FaUserCircle size={60} className="text-blue-900 my-6" />
                    <div className="mb-4 w-full relative">
                        <label htmlFor="fullName" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsPerson className="inline-block mr-2" />
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="font-medium shadow-lg border-t-2 py-2 pl-14 pr-12 rounded-2xl w-full"
                            placeholder="L'adresse e-mail"
                            onChange={(e) => setEnteredEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="password" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsUnlock className="inline-block mr-2" />
                        </label>
                        <div >
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="font-medium shadow-lg border-t-2 py-2 pl-14 pr-12 rounded-2xl w-full"
                                placeholder="Mot de passe"
                                onChange={(e) => setEnteredPassword(e.target.value)}
                            />
                            <span
                                className="absolute top-3 right-4 text-center text-md text-blue-900 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <span className="text-sm cursor-pointer font-medium underline" onClick={() => navigate('/ForgetPassword')}>Mot de passe oublié ?</span>
                    <span className="text-sm font-medium">Vous n'avez pas de compte? <span className="text-blue-900 cursor-pointer font-bold" onClick={() => navigate('/Sign-up')}>Inscrivez-vous</span></span>
                    <button
                        type="button"
                        className="cursor-pointer font-medium bg-blue-900 mt-4 text-center text-[12px] text-white rounded-full py-3 px-6  duration-300 hover:scale-105" onClick={goToAvocat}
                    >
                        Connexion
                    </button>
                    {/* Connect with Google */}
                    <div id="google-sign-in" className="mt-3">
                        <p className="text-md mb-2 text-center">Ou connectez-vous avec</p>
                        <button
                            type="button"
                            onClick={signInWithGoogle}
                            className="flex items-center bg-red-500 text-white rounded-full py-2 px-4 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 hover:scale-105"
                        >
                            <FaGoogle className="mr-2" size={20} />
                            Se connecter avec Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
