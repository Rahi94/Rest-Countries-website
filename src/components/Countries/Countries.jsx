import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

        const handleVisitedCountry = country =>{
            const newVisitedCountry = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountry);
            console.log('add this to your visited country')
            console.log(country)
        }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h3>Visited countries: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            
           <div className="country-container">
           {
                countries.map(country =><Country 
                    key={country.cca3}
                    handleVisitedCountry= {handleVisitedCountry}
                     country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;