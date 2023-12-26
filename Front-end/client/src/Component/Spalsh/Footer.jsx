import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="p-6text-black">
            <div className="mx-auto flex justify-between items-center">
                <div className="text-2xl text-[#013656] font-bold">DZ-<span className='text-[#EAB84C]'>MOHAMI</span></div>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-black hover:text-blue-500" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-black hover:text-blue-400" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-black hover:text-pink-500" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
