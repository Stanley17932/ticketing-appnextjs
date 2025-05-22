import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req){
    try {
        const body = await req.json()

        const TicketData = body.formData;
        await Ticket.create(TicketData)

        return NextResponse.json({message: "Ticket created successfully"}, {status: 201});

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error creating ticket"}, {status: 500});
    }
}

