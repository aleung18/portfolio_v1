import { chalkArrow } from '../assets'
import { useState } from 'react'

type ImageSliderProps = {
    imageUrls: string[]
} 

const ImageSlider = ({imageUrls} : ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage () {
    setImageIndex(index => {
        if (index === imageUrls.length - 1) return 0
        return index + 1
    })
  }

  function showPrevImage () {
    setImageIndex(index => {
        if (index === 0) return imageUrls.length - 1
        return index - 1
    })
  }
  
  return (
    <div>
        <img src={imageUrls[imageIndex]} alt="image slider image" className={`h-auto ${imageIndex === 2 ? 'w-[350px]' : 'w-[200px]'}`}/>
        {/* buttons */}
        <div className='flex flex-row justify-center mt-4 space-x-[64px]'>
            <img src={chalkArrow} onClick={showPrevImage} alt="leftArrow" className='rotate-180 w-[48px] h-[48px] cursor-pointer'/>
            <img src={chalkArrow} onClick={showNextImage} alt="rightArrow" className='w-[48px] h-[48px] cursor-pointer'/>
        </div>
    </div>  
  )
}

export default ImageSlider