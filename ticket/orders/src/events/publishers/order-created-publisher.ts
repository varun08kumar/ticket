import { Publisher,OrderCreatedEvent,Subjects } from "@pavtickets/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;

  // No additional methods or properties needed for this publisher
}

