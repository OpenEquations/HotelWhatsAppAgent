import axios from 'axios';

export class AxiosApiClient {
    private apiKey: string
    private baseUrl: string

    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async get(endpoint: string, params?: any): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                },
                params: params,
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching API data:', error);
            throw error;
        }
    }

    async post(endpoint: string, data: any): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}${endpoint}`, data, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error posting API data:', error);
            throw error;
        }
}
}