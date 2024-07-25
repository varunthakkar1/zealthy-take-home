export interface AddTicketRequestBody {
    name: string,
    email: string,
    description: string
}

export interface UpdateTicketRequestBody {
    status: TicketStatus
}

export type TicketStatus = "new" | "inProgress" | "resolved"