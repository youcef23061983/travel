import { NextResponse } from "next/server";
const pool = require("../../../../../lib/db.js");
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM packages");
    const packages = result.rows;

    return NextResponse.json(packages);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 },
    );
  }
}
