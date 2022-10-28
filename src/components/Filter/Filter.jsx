import React from 'react';
import { setFilter } from 'redux/filterSlice';
import {getFilter} from 'redux/selectors'
import { useDispatch, useSelector } from 'react-redux';

import css from '../../components/styles.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)

  const onChange = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <label className={css.label}>
      Filter by name:
      <input
        className={css.input}
        type="filter"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
