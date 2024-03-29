import {DeliveryService} from "src/app/components/delivery-services/models/DeliveryService";
import {DeliveryStatuses} from "src/app/components/delivery-services/models/DeliveryStatuses";

export class Message {
    messageId: number;
    attachedFiles: any = null;
    theme: string;
    body: string;
    destinationDate: Date = null;
    destinationEmail: string;
    size: number = 0;
    isScheduled: boolean;
    scheduleDate: Date = null;
    isSent: boolean;
    deliveryQueueId: any = 2;
    chosenDeliveryService: DeliveryService = null;
    chosenDeliveryServiceId: number;
    usedDeliveryServiceId: number = null;
    deliveryStatus: DeliveryStatuses = 0;
    userId: number = 4;

    constructor(theme: string,
        body: string,
        destinationEmail: string,
        chosenDeliveryService: DeliveryService,
        isScheduled: boolean,
        scheduleDate: any) {
        this.theme = theme;
        this.body = body;
        this.destinationEmail = destinationEmail;
        this.isSent = false;
        this.isScheduled = isScheduled;
        this.scheduleDate = scheduleDate;
        this.chosenDeliveryServiceId = chosenDeliveryService.deliveryServiceId;
        this.deliveryStatus = DeliveryStatuses.awaiting;
    }
}