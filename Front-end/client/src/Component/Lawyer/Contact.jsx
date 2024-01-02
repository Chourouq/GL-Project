// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#013656] text-black p-8 pb-2 flex justify-around items-start flex-wrap " id={'contact'}>
            <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
                <h3 className="text-3xl font-semibold mb-4 text-[#EAB84C]">Contact</h3>
                <form>

                    <input
                        type="text"
                        placeholder="Nom"
                        className=" bg-[#013656] text-[#F9F9F9] w-full h-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className=" bg-[#013656]  text-[#F9F9F9] w-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    />
                    <textarea
                        placeholder="Message"
                        className=" bg-[#013656] text-[#F9F9F9]  w-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    > </textarea>
                    <button
                        type="submit"
                        className="bg-[#013656] text-[#F9F9F9]  text-lg text-[#F9F9F9] border-[#F9F9F9] border duration-150 font-bold py-2 px-4 rounded-full items-center my-2 shadow-xl hover:scale-110 "
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0 pl-10 text-[#F9F9F9] ">
                <h3 className="text-lg font-semibold mb-4">Information</h3>
                <ul>
                    <li className="flex items-center">
                        <FaPhone size={20} className="mr-2  " />
                        : +123456789
                    </li>
                    <li className="flex items-center mb-4">
                        <FaEnvelope size={20} className="mr-2" />
                        : info@example.com
                    </li>
                    <li>
                        <span className='font-bold '>Suivez-nous sur les réseaux sociaux:</span>
                        <ul className="flex space-x-2 mt-3">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                >
                                    <FaFacebook size={32} className="text-[#EAB84C]"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter"
                                >
                                    <FaTwitter size={32} className='text-[#EAB84C]'/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="w-full md:w-1/3">
                <h3 className=" text-[#EAB84C] text-lg font-semibold mb-4">Notre Croyancee</h3>
                <p className="text-[#F9F9F9]">
                    "La loi est un système qui protège chacun, et la justice est l'objectif ultime" </p>
            </div>
        </footer>
    );
};

export default Footer;
