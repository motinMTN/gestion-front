import { ApiResponse } from "../../interfaces/response/ApiResponse";

import { TocDocService } from "../TocDocService";

export class UsersService {    
    private static end_point = "/users";

    public static async getUsersDT(params?: any): Promise<ApiResponse> {
        const response = await TocDocService.get(`${this.end_point}/datatable`, { params });
        return response.data.data;
    }

    public static async getUsers(params?: any): Promise<ApiResponse> {
        const response = await TocDocService.get(this.end_point,{params});
        return response.data;
    }
    public static async getUser(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}`;
        const response = await TocDocService.get(end_point);
        return response.data;
    }
    public static async createUser(data: any): Promise<ApiResponse> {
        const end_point = `/register`;
        const response = await TocDocService.post(end_point, data);
        return response.data;
    }
    public static async updateUser(userId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
    public static async deleteUser(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}`;
        const response = await TocDocService.delete(end_point);
        return response.data;
    }
    public static async sendUserPasswordRecovery(data: any): Promise<ApiResponse> {
        const end_point = `/password/email`;
        const response = await TocDocService.post(end_point, data);
        return response.data;
    }
    public static async resetUserPassword(data: any): Promise<ApiResponse> {
        const end_point = `/password/reset`;
        const response = await TocDocService.post(end_point, data);
        return response.data;
    }
    public static async updateUserPassword(userId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/password`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
    public static async deleteUserPassword(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/password`;
        const response = await TocDocService.delete(end_point);
        return response.data;
    }
    public static async updateUserAvatar(userId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/avatar`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
    public static async deleteUserAvatar(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/avatar`;
        const response = await TocDocService.delete(end_point);
        return response.data;
    }
    public static async updateUserProfile(userId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/profile`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
    public static async deleteUserProfile(userId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/${userId}/profile`;
        const response = await TocDocService.delete(end_point);
        return response.data;
    }


    public static async getRoles(): Promise<ApiResponse> {
        const end_point = `${this.end_point}/roles`;
        const response = await TocDocService.get(end_point);
        return response.data;
    }
    public static async getRole(roleId: number): Promise<ApiResponse> {
        const end_point = `${this.end_point}/roles/${roleId}`;
        const response = await TocDocService.get(end_point);
        return response.data;
    }
    public static async createRole(data: any): Promise<ApiResponse> {
        const response = await TocDocService.post(this.end_point, data);
        return response.data;
    }
    public static async updateRole(roleId: number, data: any): Promise<ApiResponse> {
        const end_point = `${this.end_point}/roles/${roleId}`;
        const response = await TocDocService.put(end_point, data);
        return response.data;
    }
}
