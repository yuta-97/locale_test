import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["ko", "en", "vi"],
  defaultLocale: "ko",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request) || NextResponse.next();

  // pathname을 헤더로 전달
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
