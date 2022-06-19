import React from 'react';

import './SearchBox.styles.css';

export const SearchBox = ({placeholder, changeHandler }) =>
    <input  className='search'
            type='search'
            placeholder={placeholder} 
            onChange={changeHandler}/>


