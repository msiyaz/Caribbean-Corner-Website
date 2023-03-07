import React from 'react';
// import data
import { navData } from '../data';
//import link
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link 
                to={item.href}
                activeClass='active'
                smooth={true}
                spy={true}
                offset={-200}
                className='text-xl capitalize font-primary italic hover:text-dark cursor-pointer transition-all duration-300'
              >
                {item.name}  
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
