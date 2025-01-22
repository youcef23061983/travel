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
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
