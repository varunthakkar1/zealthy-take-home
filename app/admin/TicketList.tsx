"use client"
import { useState } from "react";
import { Ticket } from "../types";
import TicketDetails from "./TicketDetails";
import TicketSummary from "./TicketSummary";

const TicketList = ({ tickets }: { tickets: Array<Ticket> }) => {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(tickets[0])
    return <div className="w-full flex">
        <TicketDetails ticket={selectedTicket} />
        <div className="w-[50%] min-w-[375px] flex flex-col">
            {tickets.map((t: Ticket) => {
                return <div className="w-full my-[10px] px-[20px]" key={t.ticketId} onClick={() => setSelectedTicket(t)}>
                    <TicketSummary ticket={t} isSelected={selectedTicket ? t.ticketId === selectedTicket?.ticketId : false} />
                </div>
            })}
        </div>
    </div>
}

export default TicketList