import React, { useState } from 'react';
import { getDefaultPetImage } from '../utils/petUtils';

const AddPetForm = ({ onAddPet }) => {
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    type: 'dog', // Default to dog
    description: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!petData.name.trim()) newErrors.name = 'Name is required';
    if (!petData.age.trim()) newErrors.age = 'Age is required';
    if (!petData.breed.trim()) newErrors.breed = 'Breed is required';
    
    // Validate age is a number
    if (petData.age && isNaN(parseInt(petData.age, 10))) {
      newErrors.age = 'Age must be a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Use a default image if none provided
      const finalPetData = {
        ...petData,
        image: petData.image || getDefaultPetImage(petData.type),
        age: parseInt(petData.age, 10)
      };
      
      onAddPet(finalPetData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Pet Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={petData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., Buddy"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="age">
            Age* (years)
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={petData.age}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 3"
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="type">
            Pet Type*
          </label>
          <select
            id="type"
            name="type"
            value={petData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="breed">
            Breed*
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={petData.breed}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.breed ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., Labrador Retriever"
          />
          {errors.breed && <p className="text-red-500 text-sm mt-1">{errors.breed}</p>}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-1" htmlFor="image">
          Image URL (optional)
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={petData.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="https://example.com/pet-image.jpg"
        />
        <p className="text-sm text-gray-500 mt-1">Leave blank for a default image</p>
      </div>

      <div>
        <label className="block text-gray-700 mb-1" htmlFor="description">
          Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          value={petData.description}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Tell us about your pet..."
        ></textarea>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Pet
        </button>
      </div>
    </form>
  );
};

export default AddPetForm;