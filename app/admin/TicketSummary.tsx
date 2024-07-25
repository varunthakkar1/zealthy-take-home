import { Ticket } from "../types"
import StatusBadge from "./StatusBadge"

const TicketSummary = ({ ticket, isSelected }: { ticket: Ticket, isSelected: boolean }) => {
    return <div className="w-full min-w-[350px] border-black border-[1px] flex justify-between p-[10px] h-min cursor-pointer"
        style={{ backgroundColor: isSelected ? 'rgba(212, 212, 212, 0.8)' : '#FFF' }}>
        <div className="w-[10%] lg:flex overflow-ellipsis flex-col justify-center hidden">{ticket.ticketId}</div>
        <div className="w-[20%] overflow-ellipsis flex-col justify-center flex">{ticket.name}</div>
        <div className="w-[30%] min-w-[20%] overflow-clip flex-col justify-center text-nowrap flex">{ticket.description}</div>
        <div className="w-[20%] min-w-[120px] overflow-ellipsis flex-col justify-center flex"><StatusBadge status={ticket.status} /></div>
    </div>
}

export default TicketSummary