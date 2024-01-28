import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import Appointment from "../Spalsh/Appointment.jsx";
import map from "../../assets/map.svg";

const ProfileHeader = () => {
    const [isAppointmentVisible, setIsAppointmentVisible] = useState(false);
    const profileData = {
        profilePicture: 'https://avocatalgerien.com/wp-content/uploads/2014/12/20141010_115537-e1426203766837.jpg',
        firstName: 'MAITRE MOHAMMED',
        lastName: 'DIF',
        lawSpecialty: 'Droit administratif',
        address: 'Hassi Bahbah 17000, Djelfa, Algérie',
        phoneNumber: '0542296357',
        cabinet: '3.028468',
        ranking: 4,
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

    const appoint = () => {
        setIsAppointmentVisible(true);
    };

    const handleMapClick = () => {
        const location = {
            "address": "Hassi Bahbah 17000, Djelfa, Algérie",
            "lat": "35.072686",
            "lng": "3.028468"
        };
        const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(location.address)}/@${location.lat},${location.lng}`;
        // Open the Google Maps link in a new tab/window
        window.open(googleMapsLink, '_blank');
    };


    return (
        <div className="profile-container flex border-2 border-[#EAB84C] text-black-500 p-8 m-6 mt-16" id={'topPage'}>
            {/* User Image Rectangle */}
            <div className="profile-container">
                <div className="user-image-container">
                    <img
                        src={profileData.profilePicture}
                        className="w-42 h-60 object-cover"
                    />
                </div>
            </div>

            {/* User Information */}
            <div className="user-info-container ml-8">
                <h2 className="text-3xl font-bold">
                    {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-gray-600 font-bold">{profileData.lawSpecialty}</p>

                {/* Star Ratings */}
                <div className="flex items-center">{renderStars(profileData.ranking)}</div>

                {/* Address */}
                <div className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faMapMarker} className="text-[#013656] text-2xl m-1" />
                    <p className="text-gray-700 font-bold">{profileData.address}</p>
                </div>
                {/* Cabinet */}
                <div className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faBuilding} className="text-[#013656] text-2xl m-1" />
                    <p className="text-gray-700 font-bold">{profileData.cabinet}</p>
                </div>
                {/* Phone Number */}
                <div className="flex items-center mt-2">
                    <FontAwesomeIcon icon={faPhone} className="text-[#013656] text-2xl m-1" />
                    <p className="text-gray-700 font-bold">{profileData.phoneNumber}</p>
                </div>
            </div>

            <div className='ml-auto'>
                {/* Map Card */}
                <div className="map-card mb-4" onClick={handleMapClick}>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <img
                        src={map}
                        alt="Map"
                        className="w-full h-40 cursor-pointer"
                    />
                </div>
                {/* Button to the right of the profile container */}
                <div className='container-buuton'>
                    <div
                        className="button cursor-pointer bg-blue-900 text-[16px] text-white font-bold text-center rounded-full py-4 px-4 shadow-xl hover:scale-105"
                        onClick={appoint}
                    >
                        Prenez Rendez-vous
                    </div>
                    {isAppointmentVisible &&
                        <div
                            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999] px-4"
                        >
                            <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                            <Appointment close={() => setIsAppointmentVisible(false)} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
