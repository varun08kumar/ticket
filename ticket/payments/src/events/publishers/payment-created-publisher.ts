import { Subjects,Publisher,PaymentCreatedEvent } from "@pavtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject= Subjects.PaymentCreated;

}