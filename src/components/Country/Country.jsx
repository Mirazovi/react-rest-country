import { useState } from 'react';
import './Country.css'
import CountryDetails from '../../CountryDetails/CountryDetails';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area} = country;
    const [visited, setVisited] = useState(false)
    const handleClick = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population :{population}</h3>
            <p>Area : {area}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Visited Country</button>
            <br />
            <div className='visited-flags'>
            <button onClick={()=>handleVisitedFlags(country)}>Add Flags</button>
            </div>
            <br />
            <button onClick={handleClick}>{visited? 'Visited' : 'Going'}</button>
            {
              visited? 'I have visited' : 'I want to visit'
            }
            <hr />
            <CountryDetails 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;