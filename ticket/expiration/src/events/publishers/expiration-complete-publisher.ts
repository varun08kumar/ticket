import { Subjects,Publisher,ExpirationCompleteEvent } from "@pavtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    readonly subject = Subjects.ExpirationComplete;
    
}