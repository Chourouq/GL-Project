import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Avocat1 from "../../assets/avocat1.svg";
import Avocat3 from "../../assets/avocat3.svg";
import Avocat4 from "../../assets/avocat4.svg";
import CardProfile from "./CardProfile.jsx";

const cardData = [
    {
        title: 'BENBATTOUCHE FOUAD',
        description: 'Droit civil',
        location: 'Batna',
        image: "https://avocatalgerien.com/wp-content/uploads/2014/12/Benbattouche.jpg",
        ranking: 4,
    },
    {
        title: 'MAITRE MISSOUM KAMEL',
        description: 'Droit des transports',
        location: 'Algérie',
        image: "https://avocatalgerien.com/wp-content/uploads/2014/12/avocat004.jpg",
        ranking: 4,
    },
    {
        title: 'MAITRE AZRI LOUNIS',
        description: 'Droit de la santé',
        location: 'Algérie',
        image:"https://avocatalgerien.com/wp-content/uploads/2016/12/photo-8.jpg",
        ranking: 3,
    },
    {
        title: 'MAITRE MOHAMED DIF',
        description: 'Droit de l\'immobilier',
        location: 'Djelfa',
        image:"https://avocatalgerien.com/wp-content/uploads/2014/12/20141010_115537-e1426203766837.jpg",
        ranking: 5,
    },
    {
        title: 'MAITRE ALLALI SANA',
        description: 'Droit familial',
        location: 'Annaba',
        image: "https://avocatalgerien.com/wp-content/uploads/2015/01/avocate-1.jpg",
        ranking: 2,
    },
];

const Lawyers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCardProfileVisible, setIsCardProfileVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const close =()=>{
        setIsCardProfileVisible(false);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsCardProfileVisible(true);
    };

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardData.length - 1));
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cardData.length - 1 ? prevIndex + 1 : 0));
    };

    const renderStars = (ranking) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`text-2xl ${i <= ranking ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    const displayedCards = [
        cardData[(currentIndex - 1 + cardData.length) % cardData.length],
        cardData[currentIndex],
        cardData[(currentIndex + 1) % cardData.length],
        cardData[(currentIndex + 2) % cardData.length],
    ];

    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-center ">
            <span className="text-4xl text-[#013656] font-bold py-8">Nos avocats</span>
            <div className="w-full relative flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] lg:grid-cols-4 gap-4 p-4 ">
                    {displayedCards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(card)}
                            className={`h-72 p-4 rounded-lg shadow-lg relative cursor-pointer  duration-300 hover:scale-105 bg-[#F9F9F9]`}
                        >
                            <div className="flex flex-col h-full justify-between items-center ">
                                <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-2 ">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl font-bold text-[#013656]">{card.title}</h2>
                                <p className="text-gray-500">{card.description}</p>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-gray-500 mr-1" />
                                    <p className="text-gray-500">{card.location}</p>
                                </div>
                                <div className="flex items-center mt-4">{renderStars(card.ranking)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center ml-4">
                    <button
                        onClick={handleSwipeLeft}
                        className="text-2xl p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                    >
                        <FaChevronLeft />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center mr-4">
                    <button
                        onClick={handleSwipeRight}
                        className="text-2xl p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            {isCardProfileVisible &&
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999] px-4"
                >
                    <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                    <CardProfile card={selectedCard} close={close} />
                </div>
            }
        </div>
    );
};

export default Lawyers;
