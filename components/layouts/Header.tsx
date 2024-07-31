import { NavLink } from '@remix-run/react';
import React from 'react';

interface Props {

}

const Header: React.FC<Props> = (props) => {
  return (
    <nav className='w-5/6 mx-auto text-white h-full flex items-center gap-x-5'>
      <NavLink to={'/'}>
        <h2 className='font-bold font-inter text-20'>Ecommerce</h2>
      </NavLink>
      <NavLink to={'/products'}>
        <h2 className='font-inter font-light text-17'>Shop</h2>
      </NavLink>
    </nav>
  );
}

export default Header;
