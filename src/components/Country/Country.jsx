
import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)
    const handleVisited = ()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountry)

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>mark as visited</button>
            <hr />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'i have visited this country' : 'i want to visit'}
        </div>
    );
};

export default Country;