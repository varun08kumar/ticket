import { Subjects,Publisher,OrderCancelledEvent } from "@pavtickets/common";
export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;

  // No additional methods or properties needed for this publisher
}