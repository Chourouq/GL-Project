import React from 'react';
import { FaUser } from 'react-icons/fa';

function Reviews() {
 
  const reviews = [
    {
      id: 1,
      profilePicture: './assets/user1.png',
      username: 'JohnDoe',
      comment: 'Excellent travail.',
    },
    {
      id: 2,
      profilePicture: './assets/user2.png',
      username: 'JaneSmith',
      comment: 'très serfiable.',
    },
    {
        id:3 ,
        profilePicture: './assets/user3.png',
        username: 'JaneSmith',
        comment: 'Professional et veré.',
      },
      {
        id: 4,
        profilePicture: './assets/user4.png',
        username: 'JaneSmith',
        comment: "il m'a vraimentn aider avec mon problème",
      },
      {
        id: 5,
        profilePicture: './assets/user5.png',
        username: 'JaneSmith',
        comment: 'Service excellent.',
      },
   
  ];

  return (
    <div className="h-3/4 w-full bg-center bg-cover " id="reviews">
      <h3 className="text-2xl font-bold mb-4">Avis</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center p-4 border border-gray-300 rounded-md hover:scale-105 transition-transform"
          >
            <img
              src={review.profilePicture}
              alt={`Profile of ${review.username}`}
              className="w-12 h-12 rounded-full mb-2"
            />
            <FaUser size={24} className="text-gray-500 mb-2" />
            <p className="text-gray-700 text-center">{review.username}</p>
            <p className="text-gray-800 text-center">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;