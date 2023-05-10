import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"

import "keen-slider/keen-slider.min.css"
import styels from "./Hero.module.css"

import { useAuth } from "@/utils/store"

const images = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider4.png",
]

const title = [
  { lineOne: "Student Store", lineTwo: "Share for Care ❤️" },
  { lineOne: "", lineTwo: "" },
  { lineOne: "", lineTwo: "" },
  { lineOne: "", lineTwo: "" },
]

function Hero() {
  const { isLoggedIN } = useAuth()
  const router = useRouter()
  const [details, setDetails] = useState(null)

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        setDetails(s.track.details)
      },
      initial: 2,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  function scaleStyle(idx) {
    if (!details) return {}
    const slide = details.slides[idx]
    if (!slide) return {}
    const scale_size = window.innerWidth < 768 ? 0.5 : 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  const handleClick = () => {
    if (!isLoggedIN) {
      router.push("/signin")
    } else {
      toast.error("Hey you we think you are logged in before !!")
    }
  }

  return (
    <>
      <div>
        <div
          ref={sliderRef}
          className={`${styels.zoom + "-out"} keen-slider px-15`}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className='keen-slider__slide relative w-full h-full'
            >
              <div style={scaleStyle(idx)} className='relative'>
                <div className='absolute lg:left-[90px] sm:left-[130px] lg:top-0 left-[35px] z-10'>
                  <h1 className='lg:text-[80px] sm:text-[40px] text-[25px] font-extrabold text-purple'>
                    {title[idx].lineOne}
                  </h1>
                  <h1 className='lg:text-[45px] sm:text-[21px] font-extrabold'>
                    {title[idx].lineTwo}
                  </h1>
                  <br />
                  <button
                    onClick={handleClick}
                    class={`${
                      idx === 0 ? "inline-block" : "hidden"
                    } lg:text-[1.5vw] sm:text-[1vw] text-[2vw] rounded bg-purple font-medium text-white shadow hover:bg-purple-dark px-4 py-2 text-center`}
                  >
                    Get Started
                  </button>
                </div>
                <Image
                  src={src}
                  width={1920}
                  height={1080}
                  alt='...'
                  className='mx-auto drop-shadow-2xl'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Hero
