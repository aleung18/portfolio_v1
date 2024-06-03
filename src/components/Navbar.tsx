import { useState } from 'react';
import { navLinks } from '../constants';
import { close, hamburger, resume } from '../assets';

const Navbar = () => {
  const[toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 sm:px-16 px-6 justify-between items-center sm:mb-[8px] mb-0'>
      <h2 className='text-white font-heyTiny text-[24px]'>ashton leung</h2>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`text-white cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            {nav.id === 'resume' ? (
              <a href={resume} target="_blank" rel="noopener noreferrer" className='font-heyTiny text-[20px]'>
                {nav.title}
              </a>
            ) : (
              <a href={`#${nav.id}`} className='font-heyTiny text-[20px]'>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : hamburger} alt="menu" className='w-[76px] h-[76px] cursor-pointer z-50' onClick={() => setToggle((prev) => (!prev))}/>
      </div>
      
      {toggle && (
        <div className="min-h-screen fixed inset-0 flex items-center justify-center bg-black z-40">
          <ul className="text-center">
            {navLinks.map((nav) => (
            <li key={nav.id} className={`text-white cursor-pointer py-4`} onClick={() => setToggle(false)}>
              {nav.id === 'resume' ? (
                <a href={resume} target="_blank" rel="noopener noreferrer" className='font-heyTiny text-[20px]'>
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`} className='font-heyTiny text-[20px]'>{nav.title}</a>
              )}
            </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar