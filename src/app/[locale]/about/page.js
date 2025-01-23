import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  const homePageMessages = messages["About"];

  return {
    title: homePageMessages ? homePageMessages.title : "Default Title",
  };
}

export default function About() {
  const t = useTranslations("About");

  return (
    <div>
      <h1>{t("booking")}</h1>
      <p>{t("p")}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        dolorum dolor consequatur beatae culpa, optio maxime dolore explicabo
        mollitia laboriosam. Impedit explicabo voluptatibus dolorum in enim eum
        voluptas totam, eos provident aperiam animi optio aliquam accusamus
        distinctio cumque, sapiente, laudantium molestiae hic! Impedit hic eum
        sed exercitationem totam, officiis tempora veniam perspiciatis placeat
        omnis distinctio suscipit eius laborum provident reprehenderit
        laboriosam pariatur non illo, eligendi delectus. Cupiditate iste
        voluptates vel officia totam voluptate. Autem incidunt totam deserunt
        placeat enim, fuga, reprehenderit unde fugit aliquam optio voluptas
        dolor. Id ad atque sapiente dolore molestias. Quod officia voluptas
        odit, porro quis tempore.
      </p>
    </div>
  );
}
