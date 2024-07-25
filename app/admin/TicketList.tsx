"use client"
import { useState } from "react";
import { Ticket } from "../types";
import TicketDetails from "./TicketDetails";
import TicketSummary from "./TicketSummary";

const TicketList = ({ tickets }: { tickets: Array<Ticket> }) => {
    const [ticketData, setTicketData] = useState<Array<Ticket>>(tickets)
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(ticketData[0])
    return <div className="w-full flex flex-wrap justify-center">
        <div className="flex my-[10px] px-[20px]">
            <TicketDetails ticket={selectedTicket} setTicketData={setTicketData} ticketData={ticketData} />
        </div>
        <div className="flex justify-center w-[1200px] min-w-[375px]">
            <div className="w-[80%] min-w-[375px] flex flex-col">
                {ticketData.map((t: Ticket) => {
                    return <div className="w-full my-[10px] px-[20px]" key={t.ticketId} onClick={() => setSelectedTicket(t)}>
                        <TicketSummary ticket={t} isSelected={selectedTicket ? t.ticketId === selectedTicket?.ticketId : false} />
                    </div>
                })}
            </div>
        </div>

    </div>
}

export default TicketList