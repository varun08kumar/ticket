import {Publisher,Subjects,TicketCreatedEvent} from "@pavtickets/common"

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
