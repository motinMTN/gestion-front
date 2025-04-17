import { ApiResponse } from "../../interfaces/response/ApiResponse";
import { TocDocService } from "../TocDocService";

export class BranchesService {
    private static end_point = "/branches";

    //*************BRANCHES*****************/
    public static async getBranches(params?: any): Promise<ApiResponse> {
        const response = await TocDocService.get(this.end_point,{params});
        return response.data;
    }
    public static async getBranch(branchId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${branchId}`;
        console.log(end_point);
        const response = await TocDocService.get(end_point, branchId);
        return response.data;
    }
    public static async createBranch(formData: FormData): Promise<ApiResponse> {
        const end_point = `${this.end_point}`;
        const response = await TocDocService.post(end_point, formData);
        return response.data;
    }
    public static async updateBranch(branchId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${branchId}`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
    public static async deleteBranch(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}`;
        const response = await TocDocService.delete(end_point);
        return response.data;
    }

    public static async getBranchesDT(params?: any): Promise<ApiResponse> {
        const response = await TocDocService.get(`${this.end_point}/datatable`, { params });
        return response.data.data;
    }

}