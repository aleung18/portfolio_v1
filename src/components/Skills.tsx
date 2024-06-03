import { skills } from '../constants';
import { whiteBox } from '../assets';

const Skills = () => (
  <section id='skills' className='w-full flex flex-col py-[120px] sm:px-36 px-6 justify-between'>
    <div className='mb-6'>
      <h1 className='text-white font-plunct text-[48px]'>
        Skills
      </h1>
    </div>
    
    <div className='flex flex-wrap justify-center items-center'>
      {skills.map((skill, index) => (
        <div key={index} className='relative w-[200px] h-auto m-2'>
          <img src={whiteBox} alt="" className=''/>
          <div className='absolute inset-0 flex justify-center items-center text-white font-heyTiny text-[22px]'>
            {skill.id}
          </div>
        </div>
      ))}
    </div>
  </section>
)


export default Skills