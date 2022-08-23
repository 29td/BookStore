import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const msg = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button onClick={checkStatusHandler} type="button">
        Check status
      </button>
      <p>{msg}</p>
    </>
  );
};
export default Categories;
