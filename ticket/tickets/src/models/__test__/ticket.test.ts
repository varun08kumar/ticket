import { Ticket } from "../ticket";


it('implements optimistic concurrency control', async () => {
    const ticket=Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    });
    await ticket.save();
    const firstInstane = await Ticket.findById(ticket.id);
    const secondInstane = await Ticket.findById(ticket.id);
    firstInstane!.set({ price: 10 });
    secondInstane!.set({ price: 15 });
    await firstInstane!.save();

    try{
        await secondInstane!.save();
    }
    catch (err) {
        return ;
    }
    throw new Error('Should not reach this point, optimistic concurrency control failed');
});

it('increments the version number on multiple saves', async () => {
    const ticket=Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    });
    await ticket.save();
    expect(ticket.version).toEqual(0);
    await ticket.save();
    expect(ticket.version).toEqual(1);
    await ticket.save();
    expect(ticket.version).toEqual(2);
});