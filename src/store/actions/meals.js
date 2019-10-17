export const TOGGLE_FAVORITE = 'TOGGLE_FAVORIE';

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};
