import React, { useState } from 'react';
import user1 from "../../assets/user1.png";
import { useNavigate } from 'react-router-dom';

//lawyer header with the "Visiter" and "Supprimer" buttons
const LawyerFrame = () => {
  const navigate = useNavigate();
  const profileData = {
    profilePicture: user1,
    firstName: 'John',
    lastName: 'Doe',
    lawSpecialty: 'Criminal Defense',
   
  };

 
  

  const handleVisiter = () => {
    // Handle logic for the "Visiter" button
    navigate ("/AvocatPovUser") //access the lawyer data
  };

  const handleSupprimer = () => {
    // Handle logic for the "Supprimer" button
  };

  return (
    <div className="profile-container flex items-center justify-between border-2 border-[#EAB84C] text-black-500 p-4 m-4">
      {/* User Image Round */}
      <div className="user-image-container rounded-full overflow-hidden">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="w-16 h-16 object-cover"
        />
      </div>

      {/* User Information */}
      <div className="user-info-container ml-4">
        <h2 className="text-2xl font-bold">
          {profileData.firstName} {profileData.lastName}
        </h2>
        <p className="text-gray-600 font-bold">{profileData.lawSpecialty}</p>
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        <div 
          className="button mx-2 cursor-pointer bg-blue-900 text-[16px] text-white font-bold text-center rounded-full py-2 px-4 shadow-xl hover:scale-105 "
          onClick={handleVisiter}
        >
          Visiter
        </div>
        <div 
          className="button mx-2 cursor-pointer bg-red-500 text-[16px] text-white font-bold text-center rounded-full py-2 px-4 shadow-xl hover:scale-105 "
          onClick={handleSupprimer}
        >
          Supprimer
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;