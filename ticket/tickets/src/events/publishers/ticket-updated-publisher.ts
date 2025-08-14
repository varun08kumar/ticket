import {Publisher,Subjects,TicketUpdatedEvent} from "@pavtickets/common"


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;  
}
