import { getRequestConfig } from "next-intl/server";

const locales = ["ko", "en"] as const;

export default getRequestConfig(async ({ locale }) => {
  // notFound() 대신 기본값으로 fallback
  const validLocale = locales.includes(locale as (typeof locales)[number]) ? locale : "ko";

  return {
    locale: validLocale as string,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
