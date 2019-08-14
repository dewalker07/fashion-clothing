import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <BrowserRouter>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/signin'>
        SIGNIN
      </Link>
    </div>
    </BrowserRouter>
  </div>
);

export default Header;
