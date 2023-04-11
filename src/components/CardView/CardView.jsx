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
    facebook: "facebook-circle.svg",
    twitter: "twitter-circle.svg",
    github: "github.svg",
    linkedin: "linkedin-circle.svg",
  }

  return (
    <div className='items-center bg-gray-50 rounded-lg shadow sm:flex'>
      <Image
        className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
        src={props.profile}
        alt='profile'
        width={100}
        height={100}
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
