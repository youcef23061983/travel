import { NextResponse } from "next/server";
import { data } from "../data";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const product = data.find((pro) => pro.id === parseInt(id));
    return new Response(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching package details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
