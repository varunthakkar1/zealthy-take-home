import { Ticket } from "../types"
import StatusBadge from "./StatusBadge"

const TicketSummary = ({ ticket, isSelected }: { ticket: Ticket, isSelected: boolean }) => {
    return <div className="w-full min-w-[375px] border-black border-[1px] flex justify-between p-[20px] h-full cursor-pointer"
        style={{ backgroundColor: isSelected ? 'rgba(212, 212, 212, 0.8)' : '#FFF' }}>
        <div className="w-[10%] overflow-ellipsis h-full flex-col justify-center flex">{ticket.ticketId}</div>
        <div className="w-[20%] overflow-ellipsis h-full flex-col justify-center flex">{ticket.name}</div>
        <div className="ww-[20%] overflow-ellipsis h-full flex-col justify-center flex">{ticket.email}</div>
        <div className="w-[30%] overflow-clip h-full flex-col justify-center flex">{ticket.description}</div>
        <div className="w-[20%] overflow-ellipsis h-full flex-col justify-center flex"><StatusBadge status={ticket.status} /></div>
    </div>
}

export default TicketSummary