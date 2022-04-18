import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className='country-container'>
            <img src={flag} alt="" />
            <h1>Name:{name}</h1>
            <h2>Capital:{capital}</h2>
            <h3>Population:{population}</h3>
            <h3>Region:{region}</h3>
        </div>
    );
};

export default Country;