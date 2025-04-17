import { ApiResponse } from "../../interfaces/response/ApiResponse";
import { TocDocService } from "../TocDocService";
import { ApiResponseDT } from "../../interfaces/response/ApiResponseDT";

export class DistributorService {
    private static end_point = "/distributor/";

    public static async getDistributor(name: string): Promise<ApiResponse> {
        const end_point = `${this.end_point}${name}`;
        console.log(end_point);
        const response = await TocDocService.get(end_point, name);
        return response.data;
    }
    public static async getDistributors(): Promise<ApiResponse> {
        const end_point = `${this.end_point}`;
        console.log(end_point);
        const response = await TocDocService.get(end_point, null);
        return response.data;
    }

    public static async createDistributor(data: any): Promise<ApiResponse> {
        const end_point = `/distributors`;
        const response = await TocDocService.post(end_point, data);
        return response.data;
    }

    public static async getDistributorsDT(params?: any): Promise<ApiResponseDT> {
        const response = await TocDocService.get(`/distributors/datatable`, { params });
        return response.data;
    }
}