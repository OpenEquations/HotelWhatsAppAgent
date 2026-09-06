import { AxiosApiClient } from "./inflastructure/apiClients/AxiosApiClient";

class QLOAPPTs implements APILibrary {
    apiLibrary: any;

    constructor(apiLibrary: any) {
        const axiosClient = new AxiosApiClient(apiLibrary.apiKey, apiLibrary.baseUrl);
        this.apiLibrary = axiosClient;
    }
}