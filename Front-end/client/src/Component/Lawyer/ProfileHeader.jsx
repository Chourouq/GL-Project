import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import user1 from "../../assets/user1.png";
import EditProfile from "./EditProfile.jsx"; 
//profile header with the update profile button
const ProfileHeader = () => {
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);

  const profileData = {
    profilePicture: "https://avocatalgerien.com/wp-content/uploads/2016/12/photo-8.jpg",
    firstName: 'MAITRE AZRI',
    lastName: 'LOUNIS',
    lawSpecialty: 'Droit bancaire',
    address: "04 Rue Khelifa Boukhalefa Alger centre 16000 Algérie",
    phoneNumber: "0774599503",
    cabinet: '36.766362',
    ranking: 2,
    description:'L’enracinement local, le positionnement unique et l’expertise reconnue permettent au cabinet AZRI AVOCATS de fournir des solutions innovantes',
   
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

  const editProfile = () => {
    setIsEditProfileVisible(true);
  }

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
          onClick={editProfile}
        >
          Edit Profile
        </div>
      </div>

      {isEditProfileVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[999] px-4">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <EditProfile close={() => setIsEditProfileVisible(false)} />
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;