import { getMessages } from "next-intl/server";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Home Page  Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

export default async function Image({ params: { locale } }) {
  const messages = await getMessages({ locale });

  const homePageMessages = messages["Service"];
  const title = homePageMessages ? homePageMessages.title : "Default Title";

  const backgroundimg = "/pageImages/service.jpg";
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter-SemiBold.ttf")
  );

  const backgroundImagePath = join(process.cwd(), `public${backgroundimg}`);
  const backgroundImage = await readFile(backgroundImagePath);

  return new ImageResponse(
    (
      <div
        className="flex items-center justify-center w-full h-full bg-cover"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${backgroundImage.toString(
            "base64"
          )})`,
        }}
      >
        <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
