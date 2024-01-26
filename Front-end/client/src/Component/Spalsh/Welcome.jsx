import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { FaSearchLocation, FaSearch, FaHeart } from 'react-icons/fa';
import bg from "../../assets/welcome1.svg";

const Welcome = () => {
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
    const wilayas = [
        'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
        'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa',
        'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa',
        'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj',
        'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila',
        'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane'
    ];
    
    
    const [selectedWilaya, setSelectedWilaya] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [otherInput, setOtherInput] = useState('');
    const [wilayaSuggestions, setWilayaSuggestions] = useState([]);
    const [specialtySuggestions, setSpecialtySuggestions] = useState([]);
    const navigate = useNavigate();
    const handleWilayaInputChange = (input) => {
        setSelectedWilaya(input);
        setWilayaSuggestions(input ? wilayas.filter((wilaya) => wilaya.toLowerCase().includes(input.toLowerCase())) : []);
    };
    const handleWilayaSelection = (option) => {
        setSelectedWilaya(option);
        setWilayaSuggestions([]);
    };
    const handleSpecialtySelection = (option) => {
        setSelectedSpecialty(option);
        setSpecialtySuggestions([]);
    };

    const handleSpecialtyInputChange = (input) => {
        setSelectedSpecialty(input);
        setSpecialtySuggestions(input ? specialties.filter((specialty) => specialty.toLowerCase().includes(input.toLowerCase())) : []);
    };

    const handleOtherInputChange = (input) => {
        setOtherInput(input);
    };

    const handleSearch = () => {
        // back team Implement your search functionality here
        console.log('Search clicked');
        navigate("/SearchResults");
    };
    return (
        <div className="bg-cover min-h-screen sm:rounded-b-[100px] rounded-b-[50px] px-4 sm:pt-4 pt-24 flex flex-col items-center justify-center"
             style={{ backgroundImage: `url(${bg})` }} id={'home'}>
            <h1 className="text-xl bg-yellow-900 bg-opacity-50 rounded-tl-[100px] rounded-br-[100px] p-8  text-center text-white font-medium mb-12 max-w-md">
                Bienvenue chez <span className='font-bold text-[#013656]'>DZ-</span><span className='text-[#EAB84C]'>MOHAMI </span>où l'expertise juridique rencontre un service personnalisé,Votre parcours juridique commence ici
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4  py-4">
                <div className="relative w-full sm:w-auto">
                    <input
                        type="text"
                        value={selectedWilaya}
                        onChange={(e) => handleWilayaInputChange(e.target.value)}
                        placeholder="Wilaya"
                        className="border-2 font-medium  border-blue-900 py-2 pl-4 pr-12 rounded-full focus:outline-none focus:ring focus:border-blue-300 w-full appearance-none"
                    />
                    <span className="absolute p-2 right-3 top-[6px] text-blue-900">
                        <FaSearchLocation />
                    </span>
                    {wilayaSuggestions.length > 0 && (
                        <div className="bg-white max-h-[200px] overflow-auto mt-1 p-2 rounded-md shadow-md absolute w-full z-10">
                            {wilayaSuggestions.map((option, index) => (
                                <div key={index} className="cursor-pointer py-1 px-2 hover:bg-gray-200" onClick={() => handleWilayaSelection(option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative w-full sm:w-auto">
                    <input
                        type="text"
                        value={selectedSpecialty}
                        onChange={(e) => handleSpecialtyInputChange(e.target.value)}
                        placeholder="Spécialité"
                        className="py-2 pl-4 font-medium pr-12 border-2 border-blue-900 rounded-full focus:outline-none focus:ring focus:border-blue-300 w-full appearance-none"
                    />
                    <span className="absolute p-2 right-3 top-[6px] text-blue-900">
                      <FaSearch />
                    </span>
                    {specialtySuggestions.length > 0 && (
                        <div className="bg-white max-h-[200px] overflow-auto mt-1 p-2 rounded-md shadow-md absolute w-full z-10">
                            {specialtySuggestions.map((option, index) => (
                                <div key={index} className="cursor-pointer py-1 px-2 hover:bg-gray-200" onClick={() => handleSpecialtySelection(option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative w-full sm:w-auto">
                    <input
                        type="text"
                        value={otherInput}
                        onChange={(e) => handleOtherInputChange(e.target.value)}
                        placeholder="Autre"
                        className="py-2 px-4 font-medium border-2 border-blue-900 rounded-full focus:outline-none focus:ring focus:border-blue-300 w-full"
                    />
                    <span className="absolute p-2 right-3 top-[6px] text-blue-900">
                <FaHeart />
            </span>
                </div>
                <button onClick={handleSearch} className="cursor-pointer font-medium bg-blue-900 text-center text-[12px] text-white rounded-full py-3 px-6 hover:scale-105">
                    Search
                </button>
                </div>
        </div>
    );
};

export default Welcome;
