import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        // Handle the submission of the review data (name, email, rating, and comment)
        // You can send this data to your backend or perform any other necessary actions.
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Rating:', rating);
        console.log('Comment:', comment);
    };

    return (
        <div className="bg-white p-4 mb-4 rounded-md shadow-md">
            <h3 className="text-4xl text-[#013656] font-bold py-8 ">Votre Avis</h3>
            <h2 className="text-xl font-semibold mb-2 mt-3 text-[#013656]">Laisser un avis</h2>

            {/* Name Input */}
            <div className="mb-2">
                <label className="block text-lg mb-1 text-[#013656]">Nom:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Votre nom"
                    className="w-full bg-[#F9F9F9] p-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700"
                />
            </div>

            {/* Email Input */}
            <div className="mb-2">
                <label className="block text-lg mb-1 text-[#013656]">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Votre email"
                    className="w-full bg-[#F9F9F9] p-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700"
                />
            </div>

            {/* 5-Star Rating System */}
            <div className="flex items-center mb-2">
                <label className="mr-2 text-lg">Note:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        style={{
                            cursor: 'pointer',
                            color: star <= rating ? '#EAB84C' : 'gray',
                            marginRight: '4px', // Add some spacing between stars
                        }}
                    >
                        <FaStar size={20} />
                    </span>
                ))}
            </div>

            {/* Comment Section */}
            <div className="mb-2">
                <label className="block text-lg mb-1 text-[#013656]">Commentaire:</label>
                <textarea
                    rows="3"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Écrivez votre commentaire ici..."
                    className="w-full bg-[#F9F9F9] p-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700"
                />
            </div>

            {/* Submit Button */}
            <a href="#topPage">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-[#013656] text-white text-lg border-[#EAB84C] border duration-150 font-bold py-1 px-2 rounded-full hover:bg-[#EAB84C] hover:text-[#013656] focus:outline-none"
                >
                    Soumettre
                </button>
            </a>
        </div>
    );
}

export default ReviewUser;
