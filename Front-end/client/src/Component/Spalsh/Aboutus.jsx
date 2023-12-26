import React from 'react';
import {  FaGavel, FaUsers, FaRegBuilding, FaRegSmile, FaRegClock } from "react-icons/fa";

function AboutUs() {
    return (
        <div className="h-3/4 w-full bg-center bg-cover " id={'About us'}>
            <div className="flex justify-center items-center h-full px-4 ">
                <div className="max-w-4xl w-full flex justify-between items-center p-8  bg-[#F9F9F9] rounded-lg  shadow-lg border-t-2 mb-8">
                    {/* Text on the Left */}
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold text-[#EAB84C] mb-4">À Propos de Nous</h1>
                        <p className="text-gray-900">
                            <span className="text-[#013656] font-bold">DZ</span><span className='text-[#EAB84C] font-bold'>-MOHAMI</span> est une équipe passionnée d'avocats dévoués à fournir des services juridiques exceptionnels. Nous combinons expertise juridique, engagement envers nos clients et une approche personnalisée pour résoudre une variété de questions juridiques.
                        </p>
                    </div>

                    {/* Icons */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center bg-blue-100 rounded-md p-2">
                            <FaGavel className="text-blue-600 mr-2" />
                            <span>Domaines de Pratique Variés</span>
                        </div>
                        <div className="flex items-center bg-blue-100 rounded-md p-2">
                            <FaUsers className="text-blue-600 mr-2" />
                            <span>Expertise Juridique</span>
                        </div>
                        <div className="flex items-center bg-blue-100 rounded-md p-2">
                            <FaRegBuilding className="text-blue-600 mr-2" />
                            <span>Satisfaction Client</span>
                        </div>
                        <div className="flex items-center bg-blue-100 rounded-md p-2">
                            <FaRegSmile className="text-blue-600 mr-2" />
                            <span>Service Clientèle</span>
                        </div>
                        <div className="flex items-center bg-blue-100 rounded-md p-2">
                            <FaRegClock className="text-blue-600 mr-2" />
                            <span>Efficacité</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
