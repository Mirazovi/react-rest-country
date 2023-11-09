import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    console.log(props);
    return (
        <div>
            <p>Countries Details :</p>
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;