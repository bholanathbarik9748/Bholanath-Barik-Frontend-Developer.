export const randomRantingGenerate = () => {
  return Math.floor(Math.random() * 5) + 1;
};

export const randomRecipeTime = () => {
  return Math.floor(Math.random() * 40) + 15;
};

export const renderStarRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-400">
          ★
        </span>
      );
    }
  }
  return stars;
};
