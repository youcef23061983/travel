// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: ["/", "/(en|ar)/:path*"],
// };

// filepath: /C:/Users/youcef/Documents/GitHub/travel/src/middleware.js
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|ar)/:path*", "/api/auth/:path*"],
};
