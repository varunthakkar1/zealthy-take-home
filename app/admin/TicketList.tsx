"use client"
import { useState } from "react";
import { Ticket } from "../types";
import TicketDetails from "./TicketDetails";

const TicketList = ({ tickets }: { tickets: Array<Ticket> }) => {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(tickets[0])
    return <div className="w-full flex">
        <TicketDetails ticket={selectedTicket} />

    </div>
}

export default TicketList