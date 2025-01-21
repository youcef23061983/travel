// import React from "react";

import { BASE_API_URL } from "../../utils/Url";

// const GetsinglePackage = async (locale, id) => {
//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages/${id}`
//   );
//   return data.json();
// };

// export default GetsinglePackage;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function GetsinglePackage(locale, id) {
  // if (!BASE_API_URL) {
  //   return null;
  // }
  await delay(1000);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages/${id}`
  // );
  const response = await fetch(`${BASE_API_URL}/${locale}/api/packages/${id}`);
  const data = await response.json();
  return data;
}
