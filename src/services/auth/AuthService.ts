import { ApiResponse } from "../../interfaces/response/ApiResponse";
import { User4Auth } from "../../interfaces/auth/User4Auth";
import { TocDocService } from "../TocDocService";

export class AuthService {	
	public static async login(obj: User4Auth): Promise<ApiResponse> {
		const end_point = "/login";
		const response = await TocDocService.post(end_point, obj);
		return response.data;
	}

	public static async logout(): Promise<ApiResponse> {
        const end_point = "/logout";
        const response = await TocDocService.get(end_point);
        return response.data;
    }
}