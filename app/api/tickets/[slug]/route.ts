import { UpdateTicketRequestBody } from "@/app/types";
import { sql } from "@vercel/postgres";
import { snakeCase } from 'lodash';


export async function PATCH(
    req: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // ticket ID
    const data: UpdateTicketRequestBody = await req.json()
    console.log(snakeCase(data.status))
    await sql`UPDATE tickets SET status = ${snakeCase(data.status)} WHERE ticket_id = ${slug};`;
    return Response.json("OK")
}