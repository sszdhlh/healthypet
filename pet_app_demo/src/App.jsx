import { useState } from 'react';
import PetList from './components/PetList';
import AddPetForm from './components/AddPetForm';
import { mockPets } from './data/mockPets';

function App() {
  const [pets, setPets] = useState(mockPets);
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Add a new pet to the pets state
  const addPet = (newPet) => {
    setPets([...pets, { ...newPet, id: pets.length + 1 }]);
    setShowAddForm(false);
  };

  // Filter pets by type (dog, cat, or all)
  const filteredPets = activeFilter === 'all' 
    ? pets 
    : pets.filter(pet => pet.type.toLowerCase() === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🐾 Aussie Pet App</h1>
          <button 
            onClick={() => setShowAddForm(!showAddForm)} 
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {showAddForm ? 'Cancel' : '+ Add Pet'}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {showAddForm ? (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Add a New Pet</h2>
            <AddPetForm onAddPet={addPet} />
          </div>
        ) : (
          <div className="mb-6 bg-white p-4 rounded-lg shadow flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              All Pets
            </button>
            <button 
              onClick={() => setActiveFilter('dog')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'dog' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Dogs
            </button>
            <button 
              onClick={() => setActiveFilter('cat')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'cat' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Cats
            </button>
          </div>
        )}

        <PetList pets={filteredPets} />

        {filteredPets.length === 0 && (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-600">No pets found. Add some pets to get started!</p>
          </div>
        )}
      </main>

      <footer className="bg-blue-700 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2023 Aussie Pet App - For Australian Pet Lovers</p>
        </div>
      </footer>
    </div>
  );
}

export default App;