import React, { useState } from 'react';
import bg from "../../assets/welcome.svg";
import { BsPerson, BsUnlock } from "react-icons/bs";
import { FaUserCircle, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // make your logique here for the backend team
        console.log("Reset Password logic");
    };

    return (
        <div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex justify-center items-center h-screen px-2">
                <form className="max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-3xl p-4">
                    <h1 className="text-blue-800 text-3xl font-bold pt-3">Mot de passe oublié</h1>
                    <FaUserCircle size={60} className="text-blue-900 my-6" />
                    <div className="mb-4 w-full relative">
                        <label htmlFor="email" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsPerson className="inline-block mr-2" />
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="font-medium shadow-lg border-t-2 py-2 pl-14 pr-12 rounded-2xl w-full"
                            placeholder="L'adresse e-mail"
                        />
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="newPassword" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsUnlock className="inline-block mr-2" />
                        </label>
                        <div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="newPassword"
                                name="newPassword"
                                className="font-medium shadow-lg border-t-2 py-2 pl-14 pr-12 rounded-2xl w-full"
                                placeholder="Nouveau mot de passe"
                            />
                            <span
                                className="absolute top-3 right-4 text-center text-md text-blue-900 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="newPassword" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsUnlock className="inline-block mr-2" />
                        </label>
                        <div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="font-medium shadow-lg border-t-2 py-2 pl-14 pr-12 rounded-2xl w-full"
                                placeholder="Confirmer le mot de passe"
                            />
                            <span
                                className="absolute top-3 right-4 text-center text-md text-blue-900 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                    </div>
                    <button
                        type="submit"
                        onClick={handleResetPassword}
                        className="cursor-pointer font-medium bg-blue-900 mt-4 text-center text-[12px] text-white rounded-full py-3 px-6  duration-300 hover:scale-105"
                    >
                        Réinitialiser le mot de passe
                    </button>

                    <span className="text-sm font-medium mt-3">
                        Retour à la <span className="text-blue-900 cursor-pointer font-bold" onClick={() => navigate('/Sign-In')}>page de connexion</span>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
