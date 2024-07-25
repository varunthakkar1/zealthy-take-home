import { Ticket } from "../types"

const TicketDetails = ({ ticket }: { ticket: Ticket | null }) => {
    return <div className="w-[50%] min-w-[375px]">
        {ticket ? <div>{ticket.ticketId}</div> : <div>No ticket selected</div>}
    </div>
}

export default TicketDetails