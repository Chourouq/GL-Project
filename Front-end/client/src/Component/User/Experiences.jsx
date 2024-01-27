import React from 'react';

function Experiences() {
  
  const experiences = [
    'Avocat expérimenté offrant des conseils juridiques personnalisés',
  ];

  return (
    <div className="h-3/4 w-full bg-center bg-cover ml-6 mt-10" id='Experiences'>
      <h3 className="text-4xl text-[#013656] font-bold py-8 ">Expériences</h3>
      <ul className="list-disc pl-6">
        {experiences.map((experience, index) => (
          <li key={index} className="text-black font-bold">
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiences;