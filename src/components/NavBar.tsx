/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const navigation = [
  { name: `Home`, href: `/` },
  { name: `Memberships`, href: `/#memberships` },
  { name: `Classes`, href: `/#classes` },
  { name: `Contact`, href: `/#contact` },
];

export default function NavBar() {
  return (
    <header>
      <nav className="container" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b py-6 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Renegade MMA</span>
              <Logo />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
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
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent bg-gray-800 px-4 py-2 text-sm text-white shadow-sm hover:bg-green-700"
            >
              <span className="hidden md:inline">Apply for Membership</span>
              <span className="md:hidden">Memberships</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
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
