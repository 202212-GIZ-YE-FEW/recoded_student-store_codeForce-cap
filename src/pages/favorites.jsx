import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import FavProducts from "@/components/FavProducts"

import RootLayout from "@/layout/root/RootLayout"

export default function favorites() {
  return (
    <RootLayout>
      <FavProducts />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "aboutus",
        "donation",
        "listingItems",
        "ourteam",
        "signin",
        "signup",
        "index",
      ])),
      // Will be passed to the page component as props
    },
  }
}
