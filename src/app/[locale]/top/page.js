import GetallPackages from "@/components/GetallPackages";
import React from "react";
import Top from "./Top";
import FrontImage from "@/components/frontPage/FrontImage";
import { BASE_API_URL } from "../../../../utils/Url";

const page = async ({ params: { locale } }) => {
  const PackagesData = await GetallPackages(locale);
  if (!BASE_API_URL) {
    return null;
  }

  return (
    <div>
      <FrontImage
        image={"/homepage/petra.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"HomePage"}
      />
      <Top PackagesData={PackagesData} />
    </div>
  );
};

export default page;
