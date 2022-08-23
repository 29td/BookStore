const CHECK = 'bookstore/categories/CHECK';

export default (state = [], action) => {
const categories = [];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK });
