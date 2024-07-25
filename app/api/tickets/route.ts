import { AddTicketRequestBody, TicketStatus } from "@/app/types";
import { sql } from "@vercel/postgres";

export async function GET() {
    const { rows } = await sql`SELECT * FROM tickets;`;
    return Response.json({ rows })
}

export async function POST(req: Request) {
    const data: AddTicketRequestBody = await req.json()
    const ticketStatus: TicketStatus = 'new'
    await sql`INSERT INTO tickets (name, email, description, status) VALUES (${data.name}, ${data.email}, ${data.description}, ${ticketStatus});`;
    return Response.json("OK")
}