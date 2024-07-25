"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Ticket, TicketStatus } from "../types"
import StatusBadge from "./StatusBadge"

const TicketDetails = ({ ticket, setTicketData, ticketData }:
    { ticket: Ticket | null, setTicketData: Dispatch<SetStateAction<Ticket[]>>, ticketData: Array<Ticket> }) => {
    const [ticketStatus, setTicketStatus] = useState<TicketStatus>(ticket ? ticket.status : 'new')
    const [page, setPage] = useState<"details" | "updateStatus" | "sendResponse">("details")

    useEffect(() => {
        if (ticket) {
            setTicketStatus(ticket.status)
        }
    }, [ticket])

    const handleSaveStatus = () => {
        fetch(process.env.NEXT_PUBLIC_APP_URL + 'api/tickets/' + ticket?.ticketId,
            { method: 'PATCH', body: JSON.stringify({ status: ticketStatus }) }).then(res => {
                return res.json()
            }).then(data => {
                if (ticket) {
                    console.log(data)
                    ticket.status = ticketStatus
                    const newData = ticketData.map(t => {
                        if (ticket.ticketId !== t.ticketId) {
                            return t
                        }
                        else {
                            return { ...t, status: ticketStatus }
                        }
                    })
                    setTicketData(newData)
                    setPage('details')
                }
            })
    }

    let componentContent
    if (ticket) {
        switch (page) {
            case "details":
                componentContent = (
                    <div className="flex w-full flex-col py-[20px]">
                        <div className="w-full text-lg font-bold flex justify-center">
                            Ticket #{ticket.ticketId} from {ticket.name}
                        </div>
                        <div className="w-full flex justify-center"><StatusBadge status={ticket.status} /></div>
                        <div className="w-[375px] text-lg max-w-[375px] p-[10px] flex justify-center break-words text-wrap"
                            style={{ overflowY: 'auto', overflowX: 'clip' }}>{ticket.description}</div>
                        <button onClick={() => setPage('updateStatus')}
                            className="border-blue-200 border-[1px] w-[full] text-nowrap flex justify-center px-[10px] py-[5px] rounded mx-[10px] mb-[10px]">
                            Update Status
                        </button>
                        <button className="bg-blue-200 w-[full] flex justify-center text-nowrap px-[10px] py-[5px] rounded mx-[10px]">Send Response</button>
                    </div>
                )
                break
            case "updateStatus":
                componentContent = (
                    <div className="flex w-full flex-col py-[20px]">
                        <div className="w-full text-lg font-bold flex justify-center">
                            Ticket #{ticket.ticketId} New Status
                        </div>

                        <div className="w-full flex justify-center py-[5px]" style={{
                            backgroundColor: ticketStatus === 'new' ? 'rgba(212, 212, 212, 0.8)' : '#FFF',
                            cursor: ticketStatus === 'new' ? 'not-allowed' : 'pointer'
                        }} onClick={() => setTicketStatus('new')}>New</div>
                        <div className="w-full flex justify-center py-[5px]" style={{
                            backgroundColor: ticketStatus === 'inProgress' ? 'rgba(212, 212, 212, 0.8)' : '#FFF',
                            cursor: ticketStatus === 'inProgress' ? 'not-allowed' : 'pointer'
                        }} onClick={() => setTicketStatus('inProgress')}>In Progress</div>
                        <div className="w-full flex justify-center py-[5px]" style={{
                            backgroundColor: ticketStatus === 'resolved' ? 'rgba(212, 212, 212, 0.8)' : '#FFF',
                            cursor: ticketStatus === 'resolved' ? 'not-allowed' : 'pointer'
                        }} onClick={() => setTicketStatus('resolved')}>Resolved</div>
                        <button onClick={() => setPage('details')}
                            className="border-blue-200 border-[1px] w-[full] text-nowrap flex justify-center px-[10px] py-[5px] rounded mx-[10px] mb-[10px]">
                            Cancel
                        </button>
                        <button onClick={handleSaveStatus}
                            className="bg-blue-200 w-[full] flex justify-center text-nowrap px-[10px] py-[5px] rounded mx-[10px]">Save</button>
                    </div>
                )
                break
            case "sendResponse":
        }
    }

    return <div className="w-full min-w-[375px] h-min flex border-black border-[1px]">
        {ticket ? componentContent : <div className="flex w-full justify-center text-lg">No ticket selected</div>}
    </div>
}

export default TicketDetails