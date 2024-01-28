import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import user1 from "../../assets/user1.png";
import EditProfile from "./EditProfile.jsx";
import { useAuth } from '../../contexts/AuthContext.jsx';
import axios from 'axios';
 
//profile header with the update profile button
const ProfileHeader = () => {
  const { avocatId } = useAuth();
  console.log('User ID from cookie:', avocatId);
  const [avocatProfile, setAvocatProfile] = useState(null);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);

  useEffect(() => {
    console.log('avocatId:', avocatId);
    fetchAvocatProfile(avocatId);
}, [avocatId]);

const fetchAvocatProfile = async (avocatId) => {
  try {
      const response = await axios.get(`http://localhost:8000/avocat/1`, {withCredentials:true});
      setAvocatProfile(response.data);
  } catch (error) {
      console.error('Error fetching avocat profile:', error);
      // Handle error (redirect, display message, etc.)
  }
};
const profileData = {
  profilePicture: user1,
  lawSpecialty: 'Criminal Defense',
  ranking: 4,
 
};
if (!avocatProfile) {
  // You can show a loading indicator or handle the loading state here
  return <div>Loading...</div>;
}


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

  if (!avocatProfile) {
    // You can show a loading indicator or handle the loading state here
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container flex border-2 border-[#EAB84C] text-black-500 p-8 m-6 mt-16">
      {/* User Image Rectangle */}
      <div className="profile-container ">
        <div className="user-image-container ">
          <img
            src={avocatProfile.profilePicture || user1} // Provide a default image if 'profilePicture' is not available
            className="w-42 h-60 object-cover "
            alt="Profile"
          />
        </div>
      </div>
  
      {/* User Information */}
      <div className="user-info-container ml-8">
        <h2 className="text-3xl font-bold">
          {avocatProfile.nom || 'N/A'} {/* Provide a default value if 'nom' is not available */}
        </h2>
        <p className="text-gray-600 font-bold">
          {avocatProfile.lawSpecialty || 'N/A'} {/* Provide a default value if 'lawSpecialty' is not available */}
        </p>
  
        {/* Star Ratings */}
        <div className="flex items-center">{renderStars(avocatProfile.ranking || 0)}</div>
  
        {/* Address */}
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faMapMarker} className="text-[#013656] text-2xl m-1" />
          <p className="text-gray-700 font-bold">
            Address: {avocatProfile.address || 'N/A'} {/* Provide a default value if 'address' is not available */}
          </p>
        </div>
  
        {/* Cabinet */}
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faBuilding} className="text-[#013656] text-2xl m-1" />
          <p className="text-gray-700 font-bold">
            Portfolio: {avocatProfile.website || 'N/A'} {/* Provide a default value if 'website' is not available */}
          </p>
        </div>
  
        {/* Phone Number */}
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faPhone} className="text-[#013656] text-2xl m-1" />
          <p className="text-gray-700 font-bold">
            Phone: {avocatProfile.phone || 'N/A'} {/* Provide a default value if 'phone' is not available */}
          </p>
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