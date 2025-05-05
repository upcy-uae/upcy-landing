import { useTranslations } from "next-intl";

export default function WashingSolutions() {
  const t = useTranslations("IndexPage");
  return (
    <main className="p-24">
      <h4 className="animate pop font-light text-4xl">
        Washing Solutions - {t("title")}
      </h4>
    </main>
  );
}
