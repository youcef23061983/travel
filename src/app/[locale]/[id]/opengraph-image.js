import GetsinglePackage from "@/components/GetsinglePackage";
import { getMessages } from "next-intl/server";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "detail package  Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image({ params: { locale, id } }) {
  const pack = await GetsinglePackage(locale, id);
  const messages = await getMessages({ locale });
  const detailMessages = messages?.Detail;
  const city = messages?.HomePage?.packages?.[`package${id}`]?.city;
  const title = detailMessages?.title
    ? `${detailMessages.title} ${city || "City"}`
    : "Default Title";
  const backgroundimg = pack?.packageimage;

  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter-SemiBold.ttf")
  );

  // Path to your background image
  const backgroundImagePath = join(process.cwd(), `public${backgroundimg}`);
  const backgroundImage = await readFile(backgroundImagePath);

  return new ImageResponse(
    (
      // ImageResponse JSX element
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
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
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
