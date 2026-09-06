class APIClient {
    private apiKey: string;
    private baseUrl: string;
    private outputFormat: string;

    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.outputFormat = 'json';
    }

    
}