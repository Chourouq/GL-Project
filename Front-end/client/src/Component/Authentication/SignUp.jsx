import React, { useState, useEffect } from 'react';
import bg from "../../assets/welcome.svg";
import { FaUserCircle, FaBook } from "react-icons/fa";
import { BsMailboxFlag, BsPerson, BsUnlock, BsEye, BsEyeSlash, BsTelephone, BsBook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    const [specialties, setSpecialties] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        // Fetch specialties when the component mounts
        const fetchSpecialties = async () => {
            try {
                const response = await axios.get('http://localhost:8000/specialties');
                setSpecialties(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            }
        };

        fetchSpecialties();
    }, []);


    /*const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };*/
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Request payload:', {
                ...formData,
                specialites: selectedSpecialties.map(specialty => specialty.nomSpecialite),
            });
    
            const response = await axios.post('http://localhost:8000/register', {
                ...formData,
                specialites: selectedSpecialties.map(specialty => specialty.nomSpecialite),
            });

            if (response.status === 200) {
                console.log('Registration successful:', response.data);
                // Handle successful registration
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            // Handle errors
            if (error.response) {
                console.error('Server response:', error.response.data);
        
                // Log details from the 'detail' array if available
                if (error.response.data.detail && Array.isArray(error.response.data.detail)) {
                  console.error('Error details:', error.response.data.detail);
                }
                console.error('Error details:');
                error.response.data.detail.forEach((errorDetail, index) => {
                  console.error(`Error detail ${index + 1}:`, errorDetail);
                });
              }
        }
    };

    
    const handleSpecialtyClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSpecialtySelect = (selectedOption) => {
        //setSelectedSpecialties([...selectedSpecialties, selectedOption.nomSpecialite]);
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
                            className="font-medium shadow-lg border-t-2 py-2 pl-10 pr-12 rounded-2xl w-full"
                            placeholder="Adresse e-mail"
                            onChange={handleInputChange} 
                        />
                    </div>

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
                                onChange={handleInputChange} 
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
                                    {option.nomSpecialite}
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
                                {specialty.nomSpecialite}
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
                                onChange={handleInputChange} 
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
                                onChange={handleInputChange} 
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
