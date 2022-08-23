const COMPELET = 'bookstore/categories/COMPLETE';

const categories = [];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case COMPELET:
      return UNDER_CONSTRUCTION;
    default:
      return state;
  }
};

export default categoriesReducer;
