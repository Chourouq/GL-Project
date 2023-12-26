import React, {useState} from 'react';
import {FaMapMarkerAlt, FaTimes} from "react-icons/fa";
import Appointment from "./Appointment.jsx";

function CardProfile({card ,close}) {
    const [isAppointmentVisible, setIsAppointmentVisible] = useState(false);

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
    const appoint =()=>{
        setIsAppointmentVisible(true);
    }

    return (
            <div
                className="relative max-w-lg w-full flex flex-col border-t-2 justify-center items-center shadow-lg bg-white rounded-xl p-4"
            >
                <button
                    className="flex absolute top-2 right-2"
                    onClick={close}
                >
                    <FaTimes/>
                </button>
                <h1 className="text-blue-800 text-3xl font-bold py-3">Information sur l'avocat</h1>
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
                <button
                    className="cursor-pointer font-medium bg-blue-900 mt-4 text-center text-[12px] text-white rounded-full py-3 px-6 hover:scale-105"
                    onClick={appoint}
                >
                    Prendre rendez-vous
                </button>
                {isAppointmentVisible &&
                    <div
                        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999] px-4"
                    >
                        <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                        <Appointment close={()=>setIsAppointmentVisible(false)} />
                    </div>
                }
            </div>
    );
}

export default CardProfile;