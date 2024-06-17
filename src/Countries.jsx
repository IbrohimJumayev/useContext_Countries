import { useContext } from "react";
import { countriesContext } from "./App";

function Countries() {
    const { countries, setCountries } = useContext(countriesContext)
    return (
        <div className="countries">
            <div className="card">
                {countries.map((country) => (
                    <div className="counryCar" key={country.cca3}>
                        <img src={country.flags.png} alt="" />
                        <p>{country.name.common}</p>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default Countries;