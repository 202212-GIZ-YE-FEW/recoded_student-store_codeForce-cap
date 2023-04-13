import CardView from "../CardView"

function OurTeam() {
  const team = [
    {
      id: 1,
      photo: "/mohammed.jpg",
      name: "Moahmmed Al-Qershi",
      job: "Font-End Developer & ERPNext Developer",
      description:
        "I am a dedicated and passionate developer who is committed to delivering exceptional results and exceeding client expectations.",
      facebook: "https://www.facebook.com/profile.php?id=100006287622110",
      twitter: "https://twitter.com/m_alqershi",
      github: "https://github.com/messam10",
      linkedin: "https://www.linkedin.com/in/mohammed-al-qershi-44681920b/",
    },
    {
      id: 2,
      photo: "/nabil.jpg",
      name: "NabiL Ashbat",
      job: "Font-End Developer",
      description:
        "A recent B.Sc. Computer Science graduate. In love with IT, Web development, Cybersecurity, and self-consciousness. Obsessed with everyday life challenges.",
      facebook: "",
      twitter: "",
      github: "https://github.com/nabily4e-dev",
      linkedin: "",
    },
    {
      id: 3,
      photo: "/abobakr.jpg",
      name: "Abobakr Mahdi",
      job: "Font-End Developer",
      description:
        "I am a junior developer with a passion for learning and the ability to self-teach and take a little time and become a professional developer",
      facebook: "",
      twitter: "",
      github: "https://github.com/BKR779",
      linkedin: "",
    },
    {
      id: 4,
      photo: "/abdulrahman.jpg",
      name: "Abdulrahman Abdullah",
      job: "Font-End Developer",
      description:
        "CodeForce team is built on trust and mutual respect, with each member holding themselves accountable for their actions and decisions.",
      facebook: "",
      twitter: "",
      github: "https://github.com/AASB7",
      linkedin: "",
    },
    {
      id: 5,
      photo: "/marwan.jpg",
      name: "MarwanBz",
      job: "Font-End Developer",
      description:
        "CodeForce team is built on trust and mutual respect, with each member holding themselves accountable for their actions and decisions.",
      facebook: "",
      twitter: "",
      github: "https://github.com/MarwanBz",
      linkedin: "",
    },
  ]

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
          Our Team
        </h2>
        <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
          CodeForce team is built on trust and mutual respect, with each member
          holding themselves accountable for their actions and decisions.
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

export default OurTeam