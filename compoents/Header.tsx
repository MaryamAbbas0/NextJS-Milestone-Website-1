import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header'> 
      <div className='logo-container'>
        <img className='logo-img' src='/logo-p.jpg' alt='Logo' />
        <h1 className='logo'>Luxe by Tehse</h1>
      </div>
      <nav>
        <Link href="/">(Home)</Link>
        <Link href="/about">(About)</Link>
        <Link href="/perfume">(Perfumes)</Link>
        <Link href="/contact">(Contact-Us)</Link>
        <FaShoppingCart/>
      </nav>
    </header>
  );
}

export default Header;
