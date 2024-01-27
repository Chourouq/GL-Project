import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";


const cardData = [
    {
        title: 'Sami Lakhder',
        commentaire: 'Hautement professionnel et compétent',
        image: user1,
        ranking: 4,
    },
    {
        title: 'Halim Benaamrani',
        commentaire: 'Communicateur exceptionnel. A expliqué clairement les concepts juridiques',
        image: user2,
        ranking: 4,
    },
    {
        title: 'Salima Coli',
        commentaire: 'La meilleure décision pour mon cas. Approche stratégique',
        image: user3,
        ranking: 3,
    },
    {
        title: 'Atmani atmani',
        commentaire: 'Non seulement des conseils juridiques experts, mais aussi un véritable soutien',
        image: user4,
        ranking: 5,
    },
    {
        title: 'Me Christine',
        commentaire: 'Professionnalisme exemplaire, attention aux détails et normes éthiques élevées',
        image: user1,
        ranking: 2,
    },
];

const Reviews = () => {
  
    const [currentIndex, setCurrentIndex] = useState(0);
   

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
        <div className="flex flex-col w-full justify-center items-center py-10">
            <span className="text-4xl text-[#013656] font-bold py-8">Avis</span>
            <div className="w-full relative flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] lg:grid-cols-4 gap-4 p-4 ">
                    {displayedCards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(card)}
                            className={`h-72 p-4 rounded-lg shadow-lg relative cursor-pointer  duration-300 hover:scale-105 bg-[#F9F9F9]`}
                        >
                            <div className="flex flex-col h-full justify-between items-center ">
                                <div className="w-[90px] h-[90px] rounded-full overflow-hidden mb-2 ">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl font-bold text-[#013656]">{card.title}</h2>
                                <p className="text-gray-500">{card.commentaire}</p>
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
           
        </div>
    );
};

export default Reviews;