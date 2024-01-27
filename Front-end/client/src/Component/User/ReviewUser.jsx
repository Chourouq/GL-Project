import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewUser() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        // Handle the submission of the review data (rating and comment)
        // You can send this data to your backend or perform any other necessary actions.
        console.log('Rating:', rating);
        console.log('Comment:', comment);
    };

    return (
        <div className="bg-white p-4 mb-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2 mt-3 text-[#013656]">Laisser un avis</h2>

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
                    placeholder="Write your comment here..."
                    className="w-full bg-[#F9F9F9] p-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#013656] text-white text-lg border-[#EAB84C] border duration-150 font-bold py-1 px-2 rounded-full hover:bg-[#EAB84C] hover:text-[#013656] focus:outline-none"
            >
                Submit
            </button>
        </div>
    );
}

export default ReviewUser;
