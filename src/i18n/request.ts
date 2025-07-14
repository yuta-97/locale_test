import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["ko", "en"] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
