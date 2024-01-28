import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ close }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    lawSpecialty: '',
    address: '',
    phoneNumber: '',
    cabinet: '',
  });
  const navigate = useNavigate();
  const [currentField, setCurrentField] = useState('firstName');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkip = () => {
    const fieldOrder = ['firstName', 'address', 'cabinet', 'experience', 'phoneNumber'];
    const currentIndex = fieldOrder.indexOf(currentField);
    const nextField = fieldOrder[currentIndex + 1];

    if (nextField) {
      setCurrentField(nextField);
    } else {
      // No more fields, close the form
      close();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call or local state update

    // Move to the next field
    handleSkip();
  };

  const handleFinish = () => {
    // Simulate an asynchronous action with a timeout
    setTimeout(() => {
      // Navigate to the desired page after the timeout (e.g., '/AvocatUpdated')
      navigate('/AvocatUpdated');
    }, 2000); // 2000 milliseconds (2 seconds) timeout
  };

  return (
      <div className="edit-profile-modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {currentField === 'firstName' && (
              <div className="mb-4">
                {/* Field 1: First Name */}
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                  First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
                {/* "Skip" and "Update" buttons for Field 1 */}
                <div className="flex justify-end mt-2">
                  <button
                      type="button"
                      onClick={handleSkip}
                      className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Skip
                  </button>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </div>
          )}

          {/* Add similar blocks for other fields (address, cabinet, experience, phoneNumber) */}
          {currentField === 'address' && (
              <div className="mb-4">
                {/* Field 2: Address */}
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                  Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
                {/* "Skip" and "Update" buttons for Field 2 */}
                <div className="flex justify-end mt-2">
                  <button
                      type="button"
                      onClick={handleSkip}
                      className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Skip
                  </button>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </div>
          )}

          {currentField === 'cabinet' && (
              <div className="mb-4">
                {/* Field 3: Cabinet */}
                <label htmlFor="cabinet" className="block text-gray-700 font-bold mb-2">
                  Cabinet
                </label>
                <input
                    type="text"
                    id="cabinet"
                    name="cabinet"
                    value={formData.cabinet}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
                {/* "Skip" and "Update" buttons for Field 3 */}
                <div className="flex justify-end mt-2">
                  <button
                      type="button"
                      onClick={handleSkip}
                      className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Skip
                  </button>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </div>
          )}

          {currentField === 'experience' && (
              <div className="mb-4">
                {/* Field 4: Experience */}
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
                  Experience (Chaque ligne est une expérience)
                </label>
                <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    rows="4"
                    placeholder="Enter multiple experiences, each on a new line"
                ></textarea>
                {/* "Skip" and "Update" buttons for Field 4 */}
                <div className="flex justify-end mt-2">
                  <button
                      type="button"
                      onClick={handleSkip}
                      className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Skip
                  </button>
                  <button
                      type="submit"
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </div>
          )}

          {currentField === 'phoneNumber' && (
              <div className="mb-4">
                {/* Field 5: Phone Number */}
                <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                  Phone Number
                </label>
                <input
                    type="Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                />
                {/* "Finish" and "Skip" buttons for the last field */}
                <div className="flex justify-end mt-2">
                  <button
                      type="button"
                      onClick={handleSkip}
                      className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover-bg-gray-400 transition duration-300"
                  >
                    Skip
                  </button>
                  <button
                      type="button"
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition duration-300"
                      onClick={handleFinish}
                  >
                    Finish
                  </button>
                </div>
              </div>
          )}
        </form>
      </div>
  );
};

export default EditProfile;
