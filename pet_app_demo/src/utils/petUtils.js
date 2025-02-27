// Utility functions for pet-related operations
/**
 * Returns a default image URL for a pet based on its type
 * @param {string} petType - The type of pet (dog or cat)
 * @returns {string} - URL to a default image for the pet type
 */
export const getDefaultPetImage = (petType) => {
  // Default images for pets when user doesn't provide one
  const defaultImages = {
    dog: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    cat: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  };

  return defaultImages[petType.toLowerCase()] || defaultImages.dog;
};

/**
 * Formats a pet's age into a readable string
 * @param {number} age - The pet's age in years
 * @returns {string} - Formatted age string
 */
export const formatPetAge = (age) => {
  if (age < 1) {
    const months = Math.round(age * 12);
    return months === 1 ? "1 month old" : `${months} months old`;
  }
  return age === 1 ? "1 year old" : `${age} years old`;
};

/**
 * Calculates the equivalent human age of a pet
 * @param {number} age - The pet's actual age
 * @param {string} petType - The type of pet (dog or cat)
 * @returns {number} - The equivalent human age
 */
export const calculateHumanAge = (age, petType) => {
  if (petType.toLowerCase() === 'dog') {
    // Common calculation for dog's human age
    if (age <= 1) return 15;
    if (age <= 2) return 24;
    return 24 + (age - 2) * 4;
  } else if (petType.toLowerCase() === 'cat') {
    // Common calculation for cat's human age
    if (age <= 1) return 15;
    if (age <= 2) return 24;
    return 24 + (age - 2) * 4;
  }
  return age; // Default fallback
};