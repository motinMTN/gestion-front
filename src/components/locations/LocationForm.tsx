import { LocationFormProps } from "../../interfaces/dashboard/locations/ILocations";
import CountrySelector from "./CountrySelector";
import StateSelector from "./StateSelector";
import MunicipalitySelector from "./MunicipalitySelector";
import CitySelector from "./CitySelector";
import PostalCodeSelector from "./PostalCodeSelector";
import NeighborhoodSelector from "./NeighborhoodSelector";
import React, { useState, useEffect } from 'react';

const LocationForm: React.FC<LocationFormProps> = ({ formData, handleChange }) => {

    const [isCountrySelected, setIsCountrySelected] = useState<boolean>(!!formData.countryId);
    const [isStateSelected, setIsStateSelected] = useState<boolean>(!!formData.stateId);
    const [isMunicipalitySelected, setIsMunicipalitySelected] = useState<boolean>(!!formData.municipalityId);
    const [isCitySelected, setIsCitySelected] = useState<boolean>(!!formData.cityId);
    const [isPostalCodeSelected, setIsPostalCodeSelected] = useState<boolean>(!!formData.postalCodeId);

    useEffect(() => {
        setIsCountrySelected(!!formData.countryId);
    }, [formData.countryId]);

    useEffect(() => {
        setIsStateSelected(!!formData.stateId);
        setIsMunicipalitySelected(false); // Reset municipality and below when state changes
        setIsCitySelected(false);
        setIsPostalCodeSelected(false);
    }, [formData.stateId]);

    useEffect(() => {
        setIsMunicipalitySelected(!!formData.municipalityId);
        setIsCitySelected(false); // Reset city and below when municipality changes
        setIsPostalCodeSelected(false);
    }, [formData.municipalityId]);

    useEffect(() => {
        setIsCitySelected(!!formData.cityId);
        setIsPostalCodeSelected(false); // Reset postal code when city changes
    }, [formData.cityId]);

    useEffect(() => {
        setIsPostalCodeSelected(!!formData.postalCodeId);
    }, [formData.postalCodeId]);



    return (
        <div className="flex flex-col  p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Ubicación</h2>

            <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">                                            
                    <CountrySelector value={formData.countryId} onChange={handleChange} />                                        
                </div>                
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <StateSelector 
                        value={formData.stateId} countryId={formData.countryId} 
                        onChange={handleChange} 
                        disabled={!isCountrySelected} 
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <MunicipalitySelector 
                        value={formData.municipalityId} 
                        stateId={formData.stateId} 
                        onChange={handleChange}
                        disabled={!isStateSelected}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-3">                
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <CitySelector 
                        value={formData.cityId} 
                        municipalityId={formData.municipalityId} 
                        onChange={handleChange}
                        disabled={!isMunicipalitySelected}
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <PostalCodeSelector 
                        municipalityId={formData.municipalityId} 
                        value={formData.postalCodeId} 
                        onChange={handleChange}
                        disabled={!isMunicipalitySelected}
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <NeighborhoodSelector 
                        value={formData.neighborhoodId} 
                        postalCodeId={formData.postalCodeId} 
                        onChange={handleChange}
                        disabled={!isPostalCodeSelected}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-3">                
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="street">Calle</label>
                    <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Av. Miguel Hidalgo"
                        value={formData.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="noExt">No. Exterior</label>
                    <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="noExt"
                        name="noExt"
                        type="text"
                        placeholder="No. Exterior"
                        value={formData.noExt}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="noInt">No. Interior</label>
                    <input
                        className="appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="noInt"
                        name="noInt"
                        type="text"
                        placeholder="No. Interior"
                        value={formData.noInt}
                        onChange={handleChange}                        
                    />
                </div>
                
            </div>
        </div>
    );
}

export default LocationForm;
 