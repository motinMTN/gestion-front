import { ApiResponse } from "../../interfaces/response/ApiResponse";
import { TocDocService } from "../TocDocService";

export class LocationsService{
    private static end_point = '/location';

    //*************COUNTRIES*****************/
    public static async getCountries(): Promise<ApiResponse> {
        const countries_end_point = `${this.end_point}/countries`;
        const response = await TocDocService.get(countries_end_point);
        return response.data;
    }

    //*************STATES*****************/
    public static async getStatesByCountryId(countryId: number): Promise<ApiResponse> {
        const states_end_point = `${this.end_point}/states/${countryId}`;
        const response = await TocDocService.get(states_end_point);
        return response.data;
    }
    public static async getStateById(stateId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/states/${stateId}`;        
        const response = await TocDocService.get(end_point);
        return response.data;
    }

    //*************MUNICIPALITIES*****************/
    public static async getMunicipalitiesByStateId(stateId: number): Promise<ApiResponse> {
        const municipality_end_point = `${this.end_point}/municipalities/${stateId}`;
        const response = await TocDocService.get(municipality_end_point);
        return response.data;
    }

    public static async getMunicipalityById(municipalityId: number): Promise<ApiResponse> {
        const municipality_end_point = `${this.end_point}/municipalities/${municipalityId}`;        
        const response = await TocDocService.get(municipality_end_point);
        return response.data;
    }

    //*************CITIES*****************/
    public static async getCitiesByMunicipalityId(municipalityId: number): Promise<ApiResponse> {
        const city_end_point = `${this.end_point}/cities/${municipalityId}`;
        const response = await TocDocService.get(city_end_point);
        return response.data;
    }

    public static async getCityById(cityId: number): Promise<ApiResponse> {
        const city_end_point = `${this.end_point}/cities/${cityId}`;        
        const response = await TocDocService.get(city_end_point);
        return response.data;
    }

    //*************POSTAL CODES*****************/
    public static async getPostalCodesByMunicipaltyId(municipalityId: number): Promise<ApiResponse> {
        const postalCode_end_point = `${this.end_point}/postal-codes/${municipalityId}`;
        const response = await TocDocService.get(postalCode_end_point);
        return response.data;
    }
    public static async getPostalCodeById(postalCodeId: number): Promise<ApiResponse> {
        const postalCode_end_point = `${this.end_point}/postal-codes/${postalCodeId}`;        
        const response = await TocDocService.get(postalCode_end_point);
        return response.data;
    }

    //*************NEIGHBORHOODS*****************/    
    public static async getNeighborhoodsByPostalCodeId(postalCodeId: number): Promise<ApiResponse> {
        const neighborhood_end_point = `${this.end_point}/neighborhoods/${postalCodeId}`;
        const response = await TocDocService.get(neighborhood_end_point, { postalCodeId });
        return response.data;
    }
    public static async getNeighborhoodById(neighborhoodId: number): Promise<ApiResponse> {
        const neighborhood_end_point = `${this.end_point}/neighborhoods/${neighborhoodId}`;
        const response = await TocDocService.get(neighborhood_end_point);
        return response.data;
    }
}