import { QLOAPPTs } from "./QLOAppTs";
import dotenv from 'dotenv';


dotenv.config();

class WhatsappAgent {
    constructor(AIAgent: any, HotelManager: any,MetaAPIClient: any) {

    }
}

const qloApp = new QLOAPPTs({
    apiKey: process.env.PORT,
    baseUrl: 'https://api.example.com',
});

const whatsappAgent = new WhatsappAgent(null ,qloApp , null);