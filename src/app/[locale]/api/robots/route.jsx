import { BASE_API_URL } from "../../../../../utils/Url";

export async function GET(request) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1];

  if (!locale) {
    return new Response("Locale is missing", { status: 400 });
  }

  const robotsTxt = `
    User-agent: *
    Allow: /

    Disallow: /admin/
    Disallow: /login/
    Disallow: /_next/
    Disallow: /404
    Disallow: /500
    Disallow: /favicon.ico

    Sitemap: ${BASE_API_URL}/${locale}/api/sitemap
  `;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
