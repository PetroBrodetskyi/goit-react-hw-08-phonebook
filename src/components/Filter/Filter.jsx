import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactReducer';
import { selectContactsFilter } from '../../redux/products.selectors';
import css from "./Filter.module.css";


export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const filterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
      <input className={css.filterinput} onChange={filterChange} value={filter} type="text" name="filter" placeholder="Search" />
  );
};

export default Filter;
