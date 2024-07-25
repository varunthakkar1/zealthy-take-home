export interface AddTicketRequestBody {
    name: string,
    email: string,
    description: string
}

export interface UpdateTicketRequestBody {
    status: TicketStatus
}

export interface GetTicketsResponse {
    rows: Array<{
        ticket_id: number,
        name: string,
        email: string,
        description: string,
        status: string
    }>
}

export interface Ticket {
    ticketId: string,
    name: string,
    email: string,
    description: string,
    status: TicketStatus
}

export type TicketStatus = "new" | "inProgress" | "resolved"