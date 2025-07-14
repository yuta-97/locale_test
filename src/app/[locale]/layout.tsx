import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages({ locale: "en" });

  return (
    <NextIntlClientProvider messages={messages} locale="en">
      {children}
    </NextIntlClientProvider>
  );
}
