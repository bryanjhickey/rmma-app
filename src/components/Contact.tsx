import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-200 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-primary mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contact
            </h2>
          </div>
          <div className="col-span-1 md:col-span-1 md:col-start-1 lg:col-span-1 lg:col-start-2">
            <address className="not-italic text-gray-800">
              <p className="md:mb-2">3/60 Stubbs Street</p>
              <p className="md:mb-2">Kensington VIC</p>
              <p className="md:mb-2">3031</p>
              <p className="mt-4 mb-2 md:mt-0">
                <a
                  className="underline hover:text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Renegade+MMA+%26+BJJ/@-37.7907227,144.9331846,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d191140a833:0xfa85d323f5f6f44!8m2!3d-37.7907227!4d144.9353733"
                >
                  Google Map
                </a>
              </p>
            </address>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3">
            <address className="not-italic text-gray-800">
              <p className="mt-4 mb-2 lg:mt-0">
                <a
                  className="underline hover:text-green-600"
                  href="tel:+61393721011"
                >
                  (03) 9372 1011
                </a>
              </p>
              <p className="mt-4 mb-2 md:mt-0">
                <a
                  className="underline hover:text-green-600"
                  href="mailto:info@renegademma.com.au"
                >
                  info@renegademma.com.au
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
