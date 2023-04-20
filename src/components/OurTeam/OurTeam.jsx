import CardView from "../CardView"

import { withTranslation } from "next-i18next"

import Highlighter from "../highlighter"

function OurTeam({ t }) {
  const team = [
    {
      id: 1,
      photo: "https://avatars.githubusercontent.com/u/49818381?v=4",
      name: t("member-name-one"),
      job: t("member-job-one"),
      description: t("member-description-one"),
      facebook: "https://www.facebook.com/profile.php?id=100006287622110",
      twitter: "https://twitter.com/m_alqershi",
      github: "https://github.com/messam10",
      linkedin: "https://www.linkedin.com/in/mohammed-al-qershi-44681920b/",
    },
    {
      id: 2,
      photo: "https://avatars.githubusercontent.com/u/75049983?v=4",
      name: t("member-name-two"),
      job: t("member-job"),
      description: t("member-description-two"),
      facebook: "",
      twitter: "",
      github: "https://github.com/nabily4e-dev",
      linkedin: "",
    },
    {
      id: 3,
      photo: "https://avatars.githubusercontent.com/u/93738112?v=4",
      name: t("member-name-three"),
      job: t("member-job"),
      description: t("member-description-three"),
      facebook: "",
      twitter: "",
      github: "https://github.com/BKR779",
      linkedin: "",
    },
    {
      id: 4,
      photo: "https://avatars.githubusercontent.com/u/96662087?v=4",
      name: t("member-name-four"),
      job: t("member-job"),
      description: t("our-team-des"),
      facebook: "",
      twitter: "",
      github: "https://github.com/AASB7",
      linkedin: "",
    },
    {
      id: 5,
      photo: "https://avatars.githubusercontent.com/u/69892218?v=4",
      name: t("member-name-five"),
      job: t("member-job"),
      description: t("our-team-des"),
      facebook: "",
      twitter: "",
      github: "https://github.com/MarwanBz",
      linkedin: "",
    },
  ]

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
        <Highlighter highlighterStyle='aboutus' text={t("our-team")} />
        <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
          {t("our-team-des")}
        </p>
      </div>
      <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
        {team.map((e) => (
          <CardView
            key={e.id}
            profile={e.photo}
            fullName={e.name}
            jobName={e.job}
            description={e.description}
            facebook={e.facebook}
            twitter={e.twitter}
            github={e.github}
            linkedin={e.linkedin}
          />
        ))}
      </div>
    </div>
  )
}

export default withTranslation("ourteam")(OurTeam)
