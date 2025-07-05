import { NextResponse } from "next/server";
const pool = require("../../../../../../lib/db.js");

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const result = await pool.query("SELECT * FROM packages WHERE id = $1", [
      id,
    ]);
    const pkg = result.rows[0];

    if (!pkg) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch package" },
      { status: 500 }
    );
  }
}
