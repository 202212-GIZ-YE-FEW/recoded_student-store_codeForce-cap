import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import ListingItems from "@/components/ListingItems"

import RootLayout from "@/layout/root/RootLayout"

function ListingPage() {
  return (
    <RootLayout>
      <ListingItems />
    </RootLayout>
  )
}

export default ListingPage
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "listingItems"])),
      // Will be passed to the page component as props
    },
  }
}
