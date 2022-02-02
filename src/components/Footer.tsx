import React from 'react';
import { Link } from 'gatsby';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Contact from './Contact';
import AcknowledgementOfCountry from './AcknowledgementOfCountry';

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <Contact />
      <div className="container border-t-2 border-solid border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-start md:place-items-end py-24">
          <div className="col-span-1 md:col-span-2">
            <AcknowledgementOfCountry />
          </div>
          <div className="cols-span-1 md:col-start-4">
            <div className="mt-8 flex space-x-6">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 hover:text-green-600"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={24} />
              </a>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 hover:text-green-600 text-"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              &copy; {new Date().getFullYear()} Renegade Fitness &amp;
              Lifestyles. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <Link
                className="underline hover:text-green-600"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
