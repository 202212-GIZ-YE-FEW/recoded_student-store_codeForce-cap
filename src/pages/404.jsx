import Image from "next/image"

import Link from "next/link"

import RootLayout from "@/layout/root/RootLayout"

import { useTranslation } from "next-i18next"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function NotFoundPage() {
  const { t } = useTranslation("common")

  return (
    <RootLayout>
      <div
        className='container flex flex-col items-center justify-center px-5 mx-auto my-8'
        dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        <div className='max-w-md text-center'>
          <Image
            src='/images/empty-box.png'
            height={1000}
            width={1000}
            alt='Error 404'
            className='w-52 m-auto mt-5'
          />
          <h2 className='mb-8 font-extrabold text-9xl text-purple'>404</h2>
          <p className='text-2xl font-bold'>{t("error")}</p>
          <p className='mt-4 mb-8 font-semibold'>{t("error-des")}</p>
          <Link
            href='/'
            className='px-8 py-3 font-bold rounded bg-orange-500 text-white'
          >
            {t("back-home")}
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </RootLayout>
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
