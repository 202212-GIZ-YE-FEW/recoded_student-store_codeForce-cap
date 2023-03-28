import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import "keen-slider/keen-slider.min.css"
import "./Hero.module.css"

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true)
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
          }, 2000)
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
    const scale_size = window.innerWidth < 768 ? 0.5 : 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <div className='container mx-auto justify-center items-center px-10'>
        <div ref={sliderRef} className='keen-slider zoom-out'>
          {images.map((src, idx) => (
            <div key={idx} className='keen-slider__slide zoom-out__slide'>
              <div style={scaleStyle(idx)}>
                <img src={src} className='w-full h-full object-cover' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
