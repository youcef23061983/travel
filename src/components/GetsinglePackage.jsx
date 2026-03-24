import { BASE_API_URL } from "../../utils/Url";

export default async function GetsinglePackage(locale, id) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/${locale}/api/packages/${id}`,
    );
    if (!response.ok) {
      console.error(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      );
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error in GetsinglePackage:", error);
    throw error;
  }
}
