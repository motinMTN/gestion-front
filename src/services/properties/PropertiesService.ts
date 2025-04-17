import { ApiResponse } from "../../interfaces/response/ApiResponse";
import { TocDocService } from "../TocDocService";

export class PropertiesService {
    private static end_point = "/properties";

    public static async getProperty(name: string): Promise<ApiResponse> {
        const end_point = `${this.end_point}${name}`;
        console.log(end_point);
        const response = await TocDocService.get(end_point, name);
        return response.data;
    }
    public static async getProperties(): Promise<ApiResponse> {
        const end_point = `${this.end_point}`;
        console.log(end_point);
        const response = await TocDocService.get(end_point, null);
        return response.data;
    }

    public static async createProperty(data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}`;
        const response = await TocDocService.post(end_point, data);
        return response.data;
    }

    
}