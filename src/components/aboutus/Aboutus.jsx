import { withTranslation } from "next-i18next"

import Highlighter from "../highlighter"

import OurTeam from "../OurTeam"

function Aboutus({ t }) {
  return (
    <div
      className='flex flex-col items-center justify-center font-poppins'
      dir={t("language") === "ar" ? "rtl" : "ltr"}
    >
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text={t("mission")} />
        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          {t("mission-des")}
        </p>
      </div>
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text={t("history")} />
        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          {t("history-des")}
        </p>
      </div>
      <div className='grid  mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterStyle='aboutus' text={t("goals")} />

        <p className='text-purple-dark lg:w-[700px] p-3 text-2xl leading-relaxed text-center'>
          {t("goals-des")}
        </p>
        <br />
      </div>
      <OurTeam />
    </div>
  )
}

export default withTranslation("aboutus")(Aboutus)
