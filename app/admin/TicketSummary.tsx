import { Ticket } from "../types"
import StatusBadge from "./StatusBadge"

const TicketSummary = ({ ticket, isSelected }: { ticket: Ticket, isSelected: boolean }) => {
    return <div className="w-full min-w-[375px] border-black border-[1px] flex justify-between p-[20px] h-min cursor-pointer"
        style={{ backgroundColor: isSelected ? 'rgba(212, 212, 212, 0.8)' : '#FFF' }}>
        <div className="w-[10%] overflow-ellipsis flex-col justify-center flex">{ticket.ticketId}</div>
        <div className="w-[20%] overflow-ellipsis flex-col justify-center flex">{ticket.name}</div>
        <div className="w-[30%] overflow-clip flex-col justify-center text-nowrap flex">{ticket.description}</div>
        <div className="w-[20%] overflow-ellipsis flex-col justify-center flex"><StatusBadge status={ticket.status} /></div>
    </div>
}

export default TicketSummary