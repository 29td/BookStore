const UNDER_CONSTRUCTION = 'UNDER_CONSTRACTION';
const COMPELET = 'COMPLETE';

const categories = [];

export const unCompelet = () => ({
  type: UNDER_CONSTRUCTION,
});

export const complete = () => ({
  type: COMPELET,
});

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case UNDER_CONSTRUCTION:
      return false;
    case COMPELET:
      return true;
    default:
      return state;
  }
};

export default categoriesReducer;
