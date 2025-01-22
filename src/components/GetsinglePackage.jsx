// const GetsinglePackage = async (locale, id) => {
//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages/${id}`
//   );
//   return data.json();
// };

import { BASE_API_URL } from "../../utils/Url";

// export default GetsinglePackage;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// export default async function GetsinglePackage(locale, id) {
//   const response = await fetch(`${BASE_API_URL}/${locale}/api/packages/${id}`);
//   return response.json();
// }

export default async function GetsinglePackage(locale, id) {
  const response = await fetch(`${BASE_API_URL}/${locale}/api/packages/${id}`);
  const rawResponse = await response.text();
  console.log("Raw API Response:", rawResponse);

  try {
    const json = JSON.parse(rawResponse);
    return json;
  } catch (error) {
    console.error("Error parsing JSON:", error, "Raw response:", rawResponse);
    throw error;
  }
}
