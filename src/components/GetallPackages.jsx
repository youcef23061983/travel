import { BASE_API_URL } from "../../utils/Url";

const GetallPackages = async (locale) => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/${locale}/api/packages`
  // );
  const response = await fetch(`${BASE_API_URL}/${locale}/api/packages`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default GetallPackages;
