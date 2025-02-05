import GetallPackages from "@/components/GetallPackages";
import { BASE_API_URL } from "../../../../../utils/Url";

export async function GET() {
  const locales = ["en", "fr"];
  const sitemapUrls = [];

  for (const locale of locales) {
    const packagesData = await GetallPackages(locale);
    const baseUrl = `${BASE_API_URL}/${locale}`;

    sitemapUrls.push(`
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `);

    sitemapUrls.push(`
        <url>
          <loc>${baseUrl}/offer</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `);
    sitemapUrls.push(`
      <url>
        <loc>${baseUrl}/service</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `);

    packagesData.forEach((pack) => {
      sitemapUrls.push(`
        <url>
          <loc>${baseUrl}/${pack.id}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapUrls.join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
