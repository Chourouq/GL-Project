import React, { useState } from 'react';
import bg from "../../assets/welcome.svg";
import { FaUserCircle} from "react-icons/fa";
import {BsMailboxFlag, BsPerson, BsUnlock, BsEye, BsEyeSlash, BsTelephone, BsBook} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        specialite: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/register', formData);

            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                // Handle successful registration
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            // Handle errors
        }
    };

    const specialties = [
        "DROIT ADMINISTRATIF",
        "DROIT AFFAIRES",
        "DROIT BANCAIRE",
        "DROIT CIVIL",
        "DROIT COMMERCIAL",
        "DROIT DE FUSIONS ET ACQUISITIONS",
        "DROIT DE L'ENVIRONNEMENT",
        "DROIT DE L'IMMIGRATION",
        "DROIT DE L'IMMOBILIER",
        "DROIT DE LA CONSOMMATION",
        "DROIT DE LA PRESSE",
        "DROIT DE LA PROPRIÉTÉ INTELLECTUELLE",
        "DROIT DE LA SANTÉ",
        "DROIT DES ASSURANCES",
        "DROIT DES CONTRATS",
        "DROIT DES ÉNERGIES",
        "DROIT DES ENTREPRISES",
        "DROIT DES ÉTRANGERS",
        "DROIT DES FUSIONS ET ACQUISITIONS",
        "DROIT DES INVESTISSEMENTS",
        "DROIT DES PRIVATISATIONS",
        "DROIT DES RECOUVREMENT DE CRÉANCES",
        "DROIT DES SOCIÉTÉS",
        "DROIT DES TELECOM/TIC",
        "DROIT DES TRANSPORTS",
        "DROIT DOUANIER",
        "DROIT DU SPORT",
        "DROIT DU TRAVAIL",
        "DROIT FAMILIAL",
        "DROIT FONCIER",
        "DROIT INTERNATIONAL PRIVÉ",
        "DROIT JUDICIAIRE",
        "DROIT MARITIME",
        "DROIT PÉNAL",
        "DROIT ROUTIER",
        "DROIT SOCIAL",
        "DROITS DE L'HOMME",
    ];

    const handleSpecialtyClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSpecialtySelect = (selectedOption) => {
        setSelectedSpecialties([...selectedSpecialties, selectedOption]);
    };

    const handleRemoveSpecialty = (removedOption) => {
        const updatedSpecialties = selectedSpecialties.filter(
            (option) => option !== removedOption
        );
        setSelectedSpecialties(updatedSpecialties);
    };


    return (
        <div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex justify-center items-center h-screen px-2">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-3xl p-4"
                >
                    <h1 className="text-blue-800 text-3xl font-bold pt-2">Inscrivez-vous</h1>
                    <FaUserCircle size={60} className="text-blue-900 my-4" />

                    <div className="mb-4 w-full relative">
                        <label htmlFor="email" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsMailboxFlag className="inline-block mr-2" />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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

                    <div className="w-full grid grid-cols-2 gap-2">
                        <div className="mb-4 w-full relative">
                            <label htmlFor="fullName" className="absolute top-2 left-4 text-md text-blue-900">
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
                            <label htmlFor="phoneNumber" className="absolute top-2 left-4 text-md text-blue-900">
                                <BsTelephone className="inline-block mr-2" />
                            </label>
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                                placeholder="Numéro de téléphone"
                            />
                        </div>
                    </div>


                    <div className="mb-4 w-full relative">
                        <label htmlFor="specialty" className="absolute top-2 left-4 text-md text-blue-900">
                            <BsBook className="inline-block mr-2" />
                        </label>
                        <div
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full cursor-pointer overflow-y-auto max-h-40"
                            onClick={handleSpecialtyClick}
                        >
                            {selectedSpecialties.length > 0 ? (
                                <div className="flex flex-wrap">
                                    {selectedSpecialties.map((option, index) => (
                                        <div
                                            key={index}
                                            className="bg-blue-200 rounded-full px-2 m-1 flex items-center"
                                        >
                                            {option}
                                            <span
                                                className="ml-1 cursor-pointer"
                                                onClick={() => handleRemoveSpecialty(option)}
                                            >
                                                &#10006;
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span>
                                    Sélectionner une spécialité
                                </span>
                            )}
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-50 max-h-40 overflow-y-auto">
                                {specialties.map((specialty, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                        onClick={() => handleSpecialtySelect(specialty)}
                                    >
                                        {specialty}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2">
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
                    </div>

                    <span className="text-sm font-medium">Déjà inscrit(e)?<span className="text-blue-900 cursor-pointer font-bold" onClick={() => navigate('/Sign-in')}> Se connecter</span></span>

                    <div className="max-w-sm grid grid-cols-3 mt-4 justify-center items-center gap-2">
                        <button
                            type="submit"
                            className="cursor-pointer font-bold bg-blue-900 mt-2 text-center text-[12px] text-white w-full py-3 rounded-full px-2 duration-300 hover:scale-105"
                        >
                            Inscription
                        </button>
                        <span className="text-center underline">Où</span>
                        <button
                            type="submit"
                            className="cursor-pointer font-bold  bg-red-600 mt-2 text-center text-[12px] text-white rounded-full w-full py-3 px-2 uration-300 hover:scale-105"
                        >
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
