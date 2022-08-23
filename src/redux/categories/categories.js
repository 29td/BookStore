const CHECK = 'bookstore/categories/CHECK';

const categories = [];

export default (state = categories, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK });
