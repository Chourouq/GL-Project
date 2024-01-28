import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import user1 from "../../assets/user2.png";
import { useNavigate } from 'react-router-dom';
const SearchResult = () => {
  
  const profileData = {
    profilePicture: 'https://avocatalgerien.com/wp-content/uploads/2015/01/avocat002.jpg',
    firstName: 'MAITRE MOHAMED',
    lastName: '',
    lawSpecialty: 'Droit administratif',
    address: '06 rue du moulin,Djelfa,Algerie',
    phoneNumber: '0770831682',
    cabinet: '35.740700',
    ranking: 4,
  };
  const navigate = useNavigate();
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

const goToAvocat = () => {
    navigate("/AvocatPovUser");
};
  return (
    <div className="profile-container flex border-2 border-[#EAB84C] text-black-500 p-8 m-6 mt-16">
      {/* User Image Rectangle */}
      <div className="profile-container ">
        <div className="user-image-container ">
          <img
            src={profileData.profilePicture}
            className="w-42 h-60 object-cover "
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
       {/* Button to the right of the profile container */}
       <div className='container-buuton mt-auto ml-auto' >
        <div className="button container mx-2 cursor-pointer bg-blue-900 text-[16px] text-white font-bold text-center rounded-full py-4 px-4 shadow-xl hover:scale-105 "
        onClick={goToAvocat}
       >
        Voir Plus
       </div>
      
      </div>
    </div>
  );
};

export default SearchResult;