// import React from 'react';
import { useLocation } from 'react-router-dom';

const HeaderLink = ({ href, className, children, ...props }) => {
  const { pathname } = useLocation();
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === '/' + subpath?.[0];

  return (
    <a
      href={href}
      className={`${className} ${isActive ? 'border-b border-zinc-500 dark:border-zinc-300 text-zinc-950 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50'}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default HeaderLink;