import { Country, State, City }  from 'country-state-city';
import { useEffect, useState } from 'react';
import { selectorStyleClass } from '~/components/constants/styles';

const LocationSelector = () => {

    const [selectedCountry, setSelectedCountry] = useState<any>(Country.getCountryByCode("US")!);
    const [selectedRegion, setSelectedRegion] = useState<any>("null");
    const [selectedCity, setSelectedCity] = useState<any>("null");

    const [transformedCountries, setTransformedCountries] = useState<any[]>([]);
    const [transformedRegions, setTransformedRegions] = useState<any[]>([]);
    const [transformedCities, setTransformedCities] = useState<any[]>([]);

    useEffect(() => {
        const countries = Country.getAllCountries();
        setTransformedCountries(
            countries.map((country) => ({
                value: country.isoCode,
                label: country.name,
            })
            )
        )
    },[]); 

    useEffect(() => {
        console.log(selectedCountry)
        if(selectedCountry){
            const regions = State.getStatesOfCountry(selectedCountry);
            setTransformedRegions(
                regions.map((region) => ({
                    value: region.isoCode,
                    label: region.name,
                })
                )
            )
        }
    },[selectedCountry]);

    useEffect(() => {
        if(selectedCountry && selectedRegion){
            const cities = City.getCitiesOfState(selectedCountry, selectedRegion);
            setTransformedCities(
                cities.map((city) => ({
                    value: city.name,
                    label: city.name,
                })
                )
            )
        }
    }, [selectedRegion]);

    useEffect(() => {
        if(selectedCity){
            console.log("City: ", selectedCity)
        }
    }, [selectedCity]); 

    useEffect(() => {
        if(transformedCities.length==0){
            setSelectedCity(transformedCities[0]);
        }
    }, [transformedCities]);
    
    return (
        <div>
        <select
            onChange={(selectedOption: any) => setSelectedCountry(selectedOption.target.value)}
            className={selectorStyleClass} 
            >
            {transformedCountries.map((country) =>
                <option key={country.value} value={country.value}>{country.label}</option>
            )}
        </select>
        <select
            onChange={(selectedOption: any ) => setSelectedRegion(selectedOption.target.value)}
            className={selectorStyleClass} 
            //placeholder="Select Region"
            >
            {
            transformedRegions
            ?
            transformedRegions.map((region) =>
                <option key={region.value} value={region.value}>{region.label}</option>
            )
            : null
        }
        </select>
        <select
            onClick={(selectedOption: any ) => setSelectedCity(selectedOption.target.value)}
            className={selectorStyleClass} 
            // value={selectedCity}
            //placeholder="Select City"
            >
            {
            transformedCities
            ?
            transformedCities.map((city) =>
                <option key={city.value} value={city.value}>{city.label}</option>
            )
            : null
        }
        </select>
        </div>
    );
};

export default LocationSelector;
