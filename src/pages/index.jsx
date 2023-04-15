// import { useTranslation } from "next-i18next"
import Hero from "@/components/hero/Hero"
import RootLayout from "@/layout/root/RootLayout"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function HomePage() {
  // const { t } = useTranslation("common")

  return (
    <>
      <RootLayout>
        <Hero />
      </RootLayout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  }
}
