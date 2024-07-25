// import { useState } from "react"
import { Ticket } from "../types"
import TicketList from "./TicketList"

export default async function AdminPanel() {
    // const [tickets, setTickets] = useState<Array<Ticket>>([])
    const response = await fetch(process.env.APP_URL + 'api/tickets', { method: 'GET', cache: 'no-store' })
    const data: Array<Ticket> = await response.json()
    return (
        <div className="w-full h-[100dvh] bg-white text-black">
            <div className="w-full font-bold text-xl justify-center flex py-[10%]">Support Requests</div>
            <TicketList tickets={data} />
        </div>
    )
}