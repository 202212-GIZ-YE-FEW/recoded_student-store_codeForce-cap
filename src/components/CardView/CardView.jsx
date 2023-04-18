import Image from "next/image"

function ImageList(personalURL, imageName, altName) {
  return (
    <li>
      <a href={personalURL} className='text-gray-500 hover:text-gray-900'>
        <Image src={imageName} width={35} height={35} alt={altName} />
      </a>
    </li>
  )
}

function CardView(props) {
  const images = {
    facebook: "/images/facebook-circle.svg",
    twitter: "/images/twitter-circle.svg",
    github: "/images/github.svg",
    linkedin: "images/linkedin-circle.svg",
  }

  return (
    <div className='items-center bg-gray-50 rounded-lg shadow flex-col sm:flex lg:flex-row'>
      <Image
        className='rounded w-[250px] h-[270px]'
        src={props.profile}
        alt='profile'
        width={1920}
        height={1080}
      />

      <div className='p-5'>
        <h3 className='text-xl font-bold tracking-tight text-black'>
          {props.fullName}
        </h3>

        <span className='text-gray-500'>{props.jobName}</span>

        <p className='mt-3 mb-4 font-semibold text-gray-500'>
          {props.description}
        </p>

        <ul className='flex space-x-4 sm:mt-0'>
          {ImageList(props.facebook, images.facebook, "facebook")}
          {ImageList(props.twitter, images.twitter, "twitter")}
          {ImageList(props.github, images.github, "github")}
          {ImageList(props.linkedin, images.linkedin, "linkedin")}
        </ul>
      </div>
    </div>
  )
}

export default CardView
