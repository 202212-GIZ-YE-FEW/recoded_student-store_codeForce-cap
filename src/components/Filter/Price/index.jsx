import { withTranslation } from "next-i18next"
import { useState } from "react"
import { Range } from "react-range"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

function PriceFilter({ t, handlePriceFilter }) {
  const [tempValues, setTempValues] = useState([270, 770])

  const handleChange = (newValues) => {
    setTempValues(newValues)
    handlePriceFilter(newValues[0], newValues[1])
  }

  const handleMinChange = (e) => {
    const newMin = +e.target.value.replace(/\D/g, "")
    if (newMin < 0) {
      toast.warn(t("min-price"))
    } else if (newMin > tempValues[1]) {
      toast.warn(t("min-price-des"))
    } else {
      setTempValues([newMin, tempValues[1]])
      handlePriceFilter(newMin, tempValues[1])
    }
  }

  const handleMaxChange = (e) => {
    const newMax = +e.target.value.replace(/\D/g, "")
    if (newMax > 1000) {
      toast.warn(t("max-price"))
    } else if (newMax < tempValues[0]) {
      toast.warn(t("max-price-des"))
    } else {
      setTempValues([tempValues[0], newMax])
      handlePriceFilter(newMax, tempValues[0])
    }
  }

  return (
    <div className='flex flex-col items-stretch'>
      <ToastContainer
        pauseOnHover={false}
        newestOnTop={true}
        theme='colored'
        className='z-50'
      />
      <div className='flex justify-around text-2xl text-bubble-gum font-poppins font-extrabold ml-5 md:ml-10'>
        <input
          type='text'
          value={`$${tempValues[0]}`}
          onChange={handleMinChange}
          className='bg-transparent w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
        />
        <input
          type='text'
          value={`$${tempValues[1]}`}
          onChange={handleMaxChange}
          className='bg-transparent w-24 rounded-md px-2 py-1 outline-none focus:outline-[#FF8A57] focus:outline-offset-2'
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

export default withTranslation("index")(PriceFilter)
