import { DeliveryService } from "src/app/components/delivery-services/models/DeliveryService";

export interface Message {
    messageId: number;
    theme: string;
    body: string;
    destinationEmail: string;
    isSent: boolean;
    isScheduled: boolean;
    scheduleDate: Date;
    chosenDeliveryService: DeliveryService;
}
