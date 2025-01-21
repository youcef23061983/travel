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
import { data } from "../data";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const pack = data.find((item) => item.id === parseInt(id));

    return new Response(JSON.stringify(pack));
  } catch (error) {
    console.error("Error fetching package details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
