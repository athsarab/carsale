import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const links = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Blog', path: '/blog' },
  { id: 4, title: 'Contact', path: '/contact' },
  { id: 5, title: 'Dashboard', path: '/dashboard' },
  { id: 6, title: 'Portfolio', path: '/portfolio' },
];

export const Navbar = () => {
  return (
    <div>
      
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      
    </div>
  );
};

export default Navbar;
