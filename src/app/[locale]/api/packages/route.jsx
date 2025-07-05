// CREATE TABLE "packages" (
//   "id" SERIAL PRIMARY KEY,
//   "key" VARCHAR(100) UNIQUE NOT NULL,
//   "journeyDays" INTEGER NOT NULL,
//   "price" NUMERIC(10,2) NOT NULL,
//   "packageimage" TEXT NOT NULL,
//   "daysImages" TEXT[] NOT NULL,
//   "review" NUMERIC(4,2) NOT NULL,
//   "expertJudgement" NUMERIC(4,2) NOT NULL
// );
// INSERT INTO "packages"
// ("key", "journeyDays", "price", "packageimage", "daysImages", "review", "expertJudgement")
// VALUES
// ('package1', 7, 750, '/morocco/package.jpg', ARRAY[
//   '/morocco/day1.jpg', '/morocco/day2.jpg', '/morocco/day3.jpg', '/morocco/day4.jpg',
//   '/morocco/day5.jpg', '/morocco/day6.jpg', '/morocco/day7.jpg'
// ], 8.5, 9),

// ('package2', 5, 600, '/algeria/package.jpg', ARRAY[
//   '/algeria/day1.jpg', '/algeria/day2.jpg', '/algeria/day3.jpg', '/algeria/day4.jpg', '/algeria/day5.jpg'
// ], 7.81, 8.11),

// ('package3', 7, 950, '/egypt/package.jpg', ARRAY[
//   '/egypt/day1.jpg', '/egypt/day2.jpg', '/egypt/day3.jpg', '/egypt/day4.jpg',
//   '/egypt/day5.jpg', '/egypt/day6.jpg', '/egypt/day7.jpg'
// ], 9.22, 9.52),

// ('package4', 6, 850, '/riyad/package.jpg', ARRAY[
//   '/riyad/day1.jpg', '/riyad/day2.jpg', '/riyad/day3.jpg', '/riyad/day4.jpg',
//   '/riyad/day5.jpg', '/riyad/day6.jpg'
// ], 8.73, 9.03),

// ('package5', 5, 1200, '/emirates/package.jpg', ARRAY[
//   '/emirates/day1.jpg', '/emirates/day2.jpg', '/emirates/day3.jpg', '/emirates/day4.jpg', '/emirates/day5.jpg'
// ], 8.54, 10.00),

// ('package6', 5, 900, '/qatar/package.jpg', ARRAY[
//   '/qatar/day1.jpg', '/qatar/day2.jpg', '/qatar/day3.jpg', '/qatar/day4.jpg', '/qatar/day5.jpg'
// ], 8.95, 9.25),

// ('package7', 6, 850, '/oman/package.jpg', ARRAY[
//   '/oman/day1.jpg', '/oman/day2.jpg', '/oman/day3.jpg', '/oman/day4.jpg', '/oman/day5.jpg', '/oman/day6.jpg'
// ], 9.06, 9.26),

// ('package8', 7, 950, '/turkey/package.jpg', ARRAY[
//   '/turkey/day1.jpg', '/turkey/day2.jpg', '/turkey/day3.jpg', '/turkey/day4.jpg',
//   '/turkey/day5.jpg', '/turkey/day6.jpg', '/turkey/day7.jpg'
// ], 9.37, 9.57),

// ('package9', 6, 800, '/iran/package.jpg', ARRAY[
//   '/iran/day1.jpg', '/iran/day2.jpg', '/iran/day3.jpg', '/iran/day4.jpg', '/iran/day5.jpg', '/iran/day6.jpg'
// ], 8.78, 9.08),

// ('package10', 5, 1100, '/indonisia/package.jpg', ARRAY[
//   '/indonisia/day1.jpg', '/indonisia/day2.jpg', '/indonisia/day3.jpg', '/indonisia/day4.jpg',
//   '/indonisia/day5.jpg', '/indonisia/day6.jpg', '/indonisia/day7.jpg'
// ], 8.59, 10.00),

// ('package11', 6, 900, '/malaysia/package.jpg', ARRAY[
//   '/malaysia/day1.jpg', '/malaysia/day2.jpg', '/malaysia/day3.jpg', '/malaysia/day4.jpg',
//   '/malaysia/day5.jpg', '/malaysia/day6.jpg'
// ], 9.00, 9.30),

// ('package12', 7, 1200, '/umrah/package.jpg', ARRAY[
//   '/umrah/day1.jpg', '/umrah/day2.jpg', '/umrah/day3.jpg', '/umrah/day4.jpg',
//   '/umrah/day5.jpg', '/umrah/day6.jpg', '/umrah/day7.jpg'
// ], 8.81, 10.00),

// ('package13', 10, 2500, '/hadj/package.jpg', ARRAY[
//   '/hadj/day1.jpg', '/hadj/day2.jpg', '/hadj/day3.jpg', '/hadj/day4.jpg', '/hadj/day5.jpg',
//   '/hadj/day6.jpg', '/hadj/day7.jpg', '/hadj/day8.jpg', '/hadj/day9.jpg', '/hadj/day10.jpg'
// ], 9.00, 10.00),

// ('package14', 6, 950, '/petra/package.jpg', ARRAY[
//   '/petra/day1.jpg', '/petra/day2.jpg', '/petra/day3.jpg', '/petra/day4.jpg',
//   '/petra/day5.jpg', '/petra/day6.jpg'
// ], 9.22, 9.52);

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
      { status: 500 }
    );
  }
}
