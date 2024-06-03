import { alfitpic, paperairplane, thumbsup } from '../assets'
import styles from '../style'

import ImageSlider from './ImageSlider';

const images = [alfitpic, paperairplane, thumbsup];

const Hero = () => (
  <section id='about' className={`flex md:flex-row flex-col sm:px-36 px-6 py-[60px]`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-12 px-6`}>
      <div className=''>
        <h2 className='text-white mb-4 font-plunct text-[48px] typewriter'>Hey! I'm:</h2>
      </div>
      <ImageSlider imageUrls={images}/>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} flex-col xl:px-0 sm:px-12 px-6 mt-8 md:mt-0`}>
      <h1 className='text-white mb-4 font-plunct text-[48px]'>Ashton Leung</h1>
      <p className='text-white ss:text-left text-center font-heyTiny text-[20px]'>
        creator. currently a student at purdue university <br className='sm:block hidden'/> studying computer and data science.
      </p>
    </div>
  </section>
)

export default Hero