import { Ticket } from "../types"

const TicketDetails = ({ ticket }: { ticket: Ticket | null }) => {
    return <div className="w-[50%] min-w-[375px] flex border-black border-[1px]">
        {ticket ?
            <div className="flex w-full flex-col">
                <div className="w-full text-lg font-bold flex justify-center">
                    Ticket #{ticket.ticketId} from {ticket.name}
                </div>
            </div> : <div className="flex w-full justify-center text-lg">No ticket selected</div>}
    </div>
}

export default TicketDetails