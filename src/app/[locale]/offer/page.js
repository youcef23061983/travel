import { getMessages } from "next-intl/server";
import { BASE_API_URL } from "../../../../utils/Url";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import GetallPackages from "@/components/GetallPackages";
import Packages from "./Packages";
import FrontImage from "@/components/frontPage/FrontImage";
// import { Link, redirect } from "@/i18n/routing";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["Offer"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}
const page = async ({ params: { locale } }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const PackagesData = await GetallPackages(locale);
  const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/offer");
  //   <Link to="/api/auth/signin?callbackUrl=/offer" />;
  // }
  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/${locale}/offer`);
  }

  return (
    <div style={{ marginBottom: "3rem" }}>
      <FrontImage
        image={"/pageImages/groupoffer.jpg"}
        header1={"imgHeader"}
        header2={"imgTitle"}
        translateName={"HomePage"}
      />

      <Packages PackagesData={PackagesData} />
    </div>
  );
};

export default page;
