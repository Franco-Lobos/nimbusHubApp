import { ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { ICity } from 'country-state-city';
import { Country, State, City }  from 'country-state-city';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { selectorStyleClass } from '~/components/constants/styles';
import { SessionLocation } from '~/models/tomorrow/WeatherLocation';
import { getSession } from '~/session';


const LocationSelector = () => {

    const [selectedCountry, setSelectedCountry] = useState<any>(Country.getCountryByCode("US")!);
    const [selectedRegion, setSelectedRegion] = useState<any>("null");
    const [selectedCity, setSelectedCity] = useState<any>("null");

    const [transformedCountries, setTransformedCountries] = useState<any[]>([]);
    const [transformedRegions, setTransformedRegions] = useState<any[]>([]);
    const [transformedCities, setTransformedCities] = useState<any[]>([]);

    const [location, setLocation] = useState<ICity>({ name:"", latitude: "0",longitude:"0",countryCode: "", stateCode: ""});

    const [enableSubmit, setEnableSubmit] = useState<boolean>(false);

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
            setTransformedCities(cities);
        }
    }, [selectedRegion]);

    useEffect(() => {
        if(transformedCities.length==1){
            setSelectedCity(JSON.stringify(transformedCities[0]));
        }
    }, [transformedCities]);

    useEffect(() => {
        if(!selectedCity)return;
        const parsedCity : ICity= JSON.parse(selectedCity);
        if(parsedCity){
            setLocation(parsedCity)
        }
    }, [selectedCity]); 

    useEffect(() => {  
        if(!location || location.name =="")return;
        setEnableSubmit(true);
        console.log(location);
    },[location]);

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
            onChange={(selectedOption: any ) => setSelectedCity(selectedOption.target.value)}
            className={selectorStyleClass} 
            // value={selectedCity}
            //placeholder="Select City"
            >
            {
            transformedCities
            ?
            transformedCities.map((city:ICity) =>
                <option key={city.name} value={JSON.stringify(city)}>{city.name}</option>
            )
            : null
        }
        </select>
        {
            <AnimatePresence>{
            enableSubmit ?
                <motion.div
                    initial={{ height: 0, opacity: 0}}
                    animate={{ height: "min-content", opacity: 1}}
                    exit={{ height: 0 , opacity: 0}}
                >
                <Form method="post" className='flex justify-center'> {/*w-full*/}
                    <input type="hidden" name="location" value={JSON.stringify(location)} />
                    <button type="submit" className={`w-full`}>
                        <p className={`
                        w-full
                        text-blue dark:ttext-themeWhite font-semibold
                        bg-gold w-fit px-4 py-2 mt-2 rounded-md
                        dark:bg-gold   
                        `}>Observe {location.name}</p>
                        <p className={`
                            text-right text-sm text-blue/60 dark:text-themeWhite/80 italic pt-2
                        `}>{location.stateCode}, {location.countryCode}</p>
                    </button>
                </Form>
                </motion.div>
            :null
            }</AnimatePresence>
        }
        </div>
    );
};

export default LocationSelector;
