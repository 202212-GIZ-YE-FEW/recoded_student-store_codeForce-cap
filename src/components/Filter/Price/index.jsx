import { useState } from "react"
import { Range } from "react-range"

export default function PriceFilter() {
  const [tempValues, setTempValues] = useState([270, 770]) // temporary min and max values for changes made by user

  const handleChange = (newValues) => {
    setTempValues(newValues)
  }

  const handleMinChange = (e) => {
    const newMin = +e.target.value.replace(/\D/g, "")
    if (newMin < 0) {
      alert("Sorry, the minimum price is $10")
    } else if (newMin > tempValues[1]) {
      alert("Sorry, the minimum price cannot be greater than the maximum price")
    } else {
      setTempValues([newMin, tempValues[1]])
    }
  }

  const handleMaxChange = (e) => {
    const newMax = +e.target.value.replace(/\D/g, "")
    if (newMax > 1000) {
      alert("Sorry, the maximum price is $1000")
    } else if (newMax < tempValues[0]) {
      alert("Sorry, the maximum price cannot be less than the minimum price")
    } else {
      setTempValues([tempValues[0], newMax])
    }
  }

  return (
    <div className='flex flex-col items-stretch'>
      <div className='flex justify-around text-2xl text-bubble-gum font-poppins font-extrabold ml-5 md:ml-10'>
        <input
          type='text'
          value={`$${tempValues[0]}`}
          onChange={handleMinChange}
          className='w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
        />
        <input
          type='text'
          value={`$${tempValues[1]}`}
          onChange={handleMaxChange}
          className='w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
        />
      </div>
      <div className='mt-4 mx-4 md:mx-8 w-[90%]'>
        <Range
          step={1}
          min={0}
          max={1000}
          values={tempValues}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div {...props} className='py-1.5 bg-[#FF8A57] rounded-full'>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className='bg-[#7874F2] p-3 rounded-full outline-none cursor-pointer'
            />
          )}
        />
      </div>
    </div>
  )
}

/* Just leave it i need to deal with it in another time */

// import Slider from "@material-ui/core/Slider"
// import { useState } from "react"

// export default function PriceFilter() {
//   const [tempValues, setTempValues] = useState([270, 770]) // temporary min and max values for changes made by user

//   const handleChange = (event, newValues) => {
//     setTempValues(newValues)
//   }

//   const handleMinChange = (event, newMin) => {
//     if (newMin < 10) {
//       alert("Sorry, the minimum price is $10")
//     } else if (newMin > tempValues[1]) {
//       alert("Sorry, the minimum price cannot be greater than the maximum price")
//     } else {
//       setTempValues([newMin, tempValues[1]])
//     }
//   }

//   const handleMaxChange = (event, newMax) => {
//     if (newMax > 1000) {
//       alert("Sorry, the maximum price is $1000")
//     } else if (newMax < tempValues[0]) {
//       alert("Sorry, the maximum price cannot be less than the minimum price")
//     } else {
//       setTempValues([tempValues[0], newMax])
//     }
//   }

//   return (
//     <div className='flex flex-col items-stretch'>
//       <div className='flex justify-around text-2xl text-bubble-gum font-poppins font-extrabold ml-5 md:ml-10'>
//         <input
//           type='text'
//           value={`$${tempValues[0]}`}
//           onChange={handleMinChange}
//           className='w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
//         />
//         <input
//           type='text'
//           value={`$${tempValues[1]}`}
//           onChange={handleMaxChange}
//           className='w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
//         />
//       </div>
//       <div className='mt-4 mx-4 md:mx-8 w-[90%]'>
//         <Slider
//           value={tempValues}
//           onChange={handleChange}
//           step={1}
//           min={0}
//           max={1000}
//           aria-labelledby='range-slider'
//           disableRipple
//           classes={{
//             thumb: "bg-[#7874F2] p-3 rounded-full outline-none cursor-pointer",
//             rail: "py-1.5 bg-[#FF8A57] rounded-full",
//             track: "py-1.5 bg-[#FF8A57] rounded-full",
//           }}
//         />
//       </div>
//     </div>
//   )
// }
