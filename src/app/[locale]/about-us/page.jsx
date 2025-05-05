import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("IndexPage");
  return (
    <main className="p-24">
      <h4 className=" animate pop font-light text-4xl">
        About Us - {t("title")}
      </h4>
    </main>
  );
}
