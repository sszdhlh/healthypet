import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;