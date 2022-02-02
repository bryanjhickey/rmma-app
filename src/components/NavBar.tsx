/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const navigation = [
  { name: `Home`, href: `/` },
  { name: `Memberships`, href: `/#memberships` },
  { name: `Classes`, href: `/#classes` },
];

export default function NavBar() {
  return (
    <header>
      <nav className="container" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b  lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Renegade MMA</span>
              <Logo />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base hover:text-green-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/#apply"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm text-white bg-gray-400 hover:bg-green-700"
            >
              <span className="hidden md:inline">Apply for Membership</span>
              <span className="md:hidden">Memberships</span>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base hover:text-green-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
