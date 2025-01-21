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

export default async function GetsinglePackage(locale, id) {
  // await delay(1000);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages/${id}`
  // );
  const response = await fetch(`${BASE_API_URL}/${locale}/api/packages/${id}`);
  return response.json();
}
