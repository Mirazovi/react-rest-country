import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries,setCountries] = useState([]) 

    useEffect(()=>{
        // fetch('https://restcountries.com/v3.1/all')
        // .then(res => res.json())
        // .then (data => setCountries(data))
        const getData = async() => {
           try{
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json()
            setCountries(data);
           }catch(err) {
            console.log(err.message);
           }
        }
        getData()
    },[])
    // visited countries 
    const [visitedCountry,setVisitedCountry] = useState([])
    const handleVisitedCountry = (country) =>{
     const newVisitedCountry = [...visitedCountry,country];
     setVisitedCountry(newVisitedCountry)
    }
    // visited flags 
    const [visitedFlags,setVisitedFlags] = useState([]);
    const handleVisitedFlags = (flags) =>{
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <>
           {/* visited countries  */}
           <div>
            <h2>Visited country : {visitedCountry.length}</h2>
            <ul>
                {visitedCountry.map((item,idx) => <li key={idx}>{item.name.common}</li>)}
            </ul>
            <div className="visited-flags">
                {visitedFlags.map((flag,idx) => <img key={idx} src={flag.flags.png}></img>)}
            </div>
           </div>
           {/* rest countries  */}
            <h2>Countries : {countries.length}</h2>
        <div className="countries-container">
            {
                countries.map((country,idx) => <Country key={idx}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                 country={country}
                 ></Country>)
            }
        </div>
        </>
    );
};

export default Countries;