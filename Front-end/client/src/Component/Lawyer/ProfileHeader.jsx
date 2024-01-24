import React from 'react';
import Appointment from "./Appointment.jsx";


function profileHeader() {
    const [isAppointmentVisible, setIsAppointmentVisible] = useState(false);
    const appoint =()=>{
        setIsAppointmentVisible(true);
    }

  const profileData = {
    profilePicture: './assets/user1.png',
    firstName: 'John',
    lastName: 'Doe',
    lawSpecialty: 'Criminal Defense',
    address: '123 Main St, Cityville',
    phoneNumber: '+123 456 789',
    
  };

  const handleRendezVousClick = () => {
    // Implement your logic for "Prendre rendez-vous" button click
    console.log('Prendre rendez-vous clicked');
  };

  return (
    <div className="h-3/4 w-full bg-center bg-cover " id='profileHeader'>
      <div className="flex items-center">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mr-8"
        />
        <div>
          <h2 className="text-3xl font-bold">
            {profileData.firstName} {profileData.lastName}
          </h2>
          <p className="text-gray-600">{profileData.lawSpecialty}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{profileData.address}</p>
        <p className="text-gray-700">{profileData.phoneNumber}</p>
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

export default profileHeader;