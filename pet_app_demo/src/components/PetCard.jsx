import React from 'react';

const PetCard = ({ pet }) => {
  const { name, age, breed, type, description, image } = pet;
  
  // Determine badge color based on pet type
  const badgeClass = type === 'dog' 
    ? 'bg-blue-100 text-blue-800' 
    : 'bg-purple-100 text-purple-800';

  // Format age display
  const ageDisplay = age === 1 ? '1 year old' : `${age} years old`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} the ${breed}`} 
          className="w-full h-full object-cover" 
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <div className="flex items-center mb-3">
          <span className="text-gray-600 mr-3">{breed}</span>
          <span className="text-sm text-gray-500">{ageDisplay}</span>
        </div>
        
        {description && (
          <p className="text-gray-700 text-sm mt-2 line-clamp-3">
            {description}
          </p>
        )}

        <div className="mt-4 flex justify-end">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;