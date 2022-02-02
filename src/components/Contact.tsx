import React from 'react';

export default function Contact() {
  return (
    <div className="py-24 bg-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl text-primary font-extrabold tracking-tight sm:text-4xl mb-12">
              Contact
            </h2>
          </div>
          <div className="col-span-1 md:col-start-3">
            <address className="not-italic text-gray-800">
              <p className="md:mb-2">3/60 Stubbs Street</p>
              <p className="md:mb-2">Kensington VIC</p>
              <p className="md:mb-2">3021</p>
              <p className="mt-4 md:mt-0 mb-2">
                <a
                  className="underline hover:text-green-600"
                  href="http://https://www.google.com/maps/place/Renegade+MMA+%26+BJJ/@-37.7907227,144.9353733,15z/data=!4m2!3m1!1s0x0:0xfa85d323f5f6f44?sa=X&ved=2ahUKEwikoKz8i931AhX-TWwGHQ9iAuEQ_BJ6BAg4EAU"
                >
                  Google Map
                </a>
              </p>
            </address>
          </div>
          <div className="col-span-1 md:col-start-4">
            <address className="not-italic text-gray-800">
              <p className="mt-4 md:mt-0 mb-2">
                <a
                  className="underline hover:text-green-600"
                  href="tel:+61393721011"
                >
                  (03) 9372 1011
                </a>
              </p>
              <p className="mt-4 md:mt-0 mb-2">
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
