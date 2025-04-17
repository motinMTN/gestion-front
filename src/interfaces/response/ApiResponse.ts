export interface ApiResponse {
	success: boolean;
	message?: string;
	data?: any[];
	status?: number;
	errors?: { [key: string]: string[] };
	totalRecords?: number;
	totalRecordsFiltered?: number;
}