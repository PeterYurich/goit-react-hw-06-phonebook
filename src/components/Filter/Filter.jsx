import React from "react";
import PropTypes from 'prop-types';


import css from '../../components/styles.module.scss'


const Filter = ({value, onChange}) => (
    <label className={css.label}> Filter by name:
    <input className={css.input} type="filter" name="filter" value={value}
        onChange={onChange}>
    </input>
</label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter