import { getTranslations } from "next-intl/server";
import Link from "next/link";

const TITLE = "inputTitle";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold">{t(TITLE)}</h1>
        <p className="text-xl text-gray-600">{t("alrAddedWarnMessage")}</p>
        <p className="text-lg">{t("welcome")}</p>

        <div className="flex gap-4">
          <Link
            href="/vi"
            className={`px-4 py-2 rounded ${locale === "vi" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Vietnamese
          </Link>
          <Link
            href="/en"
            className={`px-4 py-2 rounded ${locale === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            English
          </Link>
        </div>
      </main>
    </div>
  );
}
