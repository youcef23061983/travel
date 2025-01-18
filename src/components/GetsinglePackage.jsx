import React from "react";

const GetsinglePackage = async (locale, id) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages/${id}`
  );
  return data.json();
};

export default GetsinglePackage;
