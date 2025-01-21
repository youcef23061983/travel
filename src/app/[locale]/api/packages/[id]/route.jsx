// import { NextResponse } from "next/server";
// import { data } from "../data";

// export async function GET(request, { params }) {
//   const { id, locale } = params;

//   try {
//     const pack = data.find((comment) => comment.id === id);
//     return new Response(JSON.stringify(pack));
//   } catch (error) {
//     console.error("Error fetching package details:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// app/api/packages/[id]/route.js
import { NextResponse } from "next/server";
import { data } from "../data"; // Ensure correct path to your data file

// This function handles the GET request for a specific package by ID
export async function GET(request, { params }) {
  // Destructure 'id' from the params (for dynamic routes)
  const { id } = params;

  try {
    // Find the package with the matching ID
    const pack = data.find((item) => item.id === id);

    // If the package doesn't exist, return a 404 error
    if (!pack) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    // Return the found package as a JSON response
    return NextResponse.json(pack);
  } catch (error) {
    // Log the error and return a 500 error in case of failure
    console.error("Error fetching package details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
