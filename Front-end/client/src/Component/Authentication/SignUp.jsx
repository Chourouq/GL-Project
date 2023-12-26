import React, { useState } from 'react';
import bg from "../../assets/welcome.svg";
import { FaUserCircle,FaBook } from "react-icons/fa";
import { BsMailboxFlag, BsPerson, BsUnlock, BsEye, BsEyeSlash} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-screen w-full bg-center bg-cover"
             style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex justify-center items-center h-screen px-2">
                <form
                    className="max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-3xl p-4"
                >
                    <h1 className="text-blue-800 text-3xl font-bold pt-3">Inscrivez-vous</h1>
                    <FaUserCircle size={60} className="text-blue-900 my-6"/>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="email" className="absolute  top-2 left-4 text-md text-blue-900">
                            <BsMailboxFlag className="inline-block mr-2" />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            placeholder="Adresse e-mail"
                        />
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="fullName" className="absolute  top-2 left-4 text-md text-blue-900">
                            <BsPerson className="inline-block mr-2" />
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            placeholder="Nom complet"
                        />
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="email" className="absolute  top-2 left-4 text-md text-blue-900">
                            <FaBook className="inline-block mr-2" />
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="specialite"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            placeholder="Spécialité"
                        />
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="password" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsUnlock className="inline-block mr-2" />
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            placeholder="Mot de passe"
                        />
                        <div
                            className="absolute top-3 right-4 text-md text-blue-900 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                        </div>
                    </div>
                    <div className="mb-4 w-full relative">
                        <label htmlFor="confirmPassword" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsUnlock className="inline-block mr-2" />
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl  w-full"
                            placeholder="Confirmer le mot de passe"
                        />
                    </div>
                    <span className="text-sm font-medium">Déjà inscrit(e)?<span className="text-blue-900 cursor-pointer font-bold" onClick={() => navigate('/Sign-in')}> Se connecter</span></span>
                    <button
                        type="submit"
                        className="cursor-pointer font-medium bg-blue-900 mt-4 text-center text-[12px] text-white rounded-full py-3 px-6  duration-300 hover:scale-105"
                    >
                        Inscription
                    </button>

                    <div className="mt-3 text-sm">
                        <button
                            type="button"
                            className="cursor-pointer font-medium bg-red-600 mt-2 text-center text-[12px] text-white rounded-full py-2 px-4 hover:text-red-400 duration-300 hover:scale-105">
                            Sign up with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
