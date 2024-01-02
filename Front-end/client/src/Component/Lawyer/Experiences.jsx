import React from 'react';

function Experiences() {
  
  const experiences = [
    '10+ years of practice in Criminal Defense',
    'Successful representation in high-profile cases',
    'Expertise in negotiation and dispute resolution',
    'Member of Bar Association',
  ];

  return (
    <div className="h-3/4 w-full bg-center bg-cover " id='Experiences'>
      <h3 className="text-2xl font-bold mb-4">Expériences</h3>
      <ul className="list-disc pl-6">
        {experiences.map((experience, index) => (
          <li key={index} className="text-[#EAB84C] font-bold">
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiences;