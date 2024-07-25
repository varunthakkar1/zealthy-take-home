import { AddTicketRequestBody, Ticket, TicketStatus } from "@/app/types";
import { sql } from "@vercel/postgres";
import { camelCase } from "lodash";

export async function GET() {
    const { rows } = await sql`SELECT * FROM tickets;`;
    // a little processing
    const newRows: Array<Ticket> = rows.map(row => {
        const newRow: Ticket = {
            ticketId: row.ticket_id,
            name: row.name,
            email: row.email,
            description: row.description,
            status: camelCase(row.status) as TicketStatus
        }
        return newRow
    })
    return Response.json(newRows)
}

export async function POST(req: Request) {
    const data: AddTicketRequestBody = await req.json()
    const ticketStatus: TicketStatus = 'new'
    await sql`INSERT INTO tickets (name, email, description, status) VALUES (${data.name}, ${data.email}, ${data.description}, ${ticketStatus});`;
    return Response.json("OK")
}