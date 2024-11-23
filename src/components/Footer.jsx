import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-6 py-8">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg">More Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#vacancies" className="hover:text-orange-400">Vacancies</a></li>
              <li><a href="#procurement" className="hover:text-orange-400">Procurement</a></li>
              <li><a href="#policies" className="hover:text-orange-400">Policies</a></li>
              <li><a href="#sitemap" className="hover:text-orange-400">Site Map</a></li>
              <li><a href="#directory" className="hover:text-orange-400">University Directory</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg">Other Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#codl" className="hover:text-orange-400">CODL/BIT Programme</a></li>
              <li><a href="#ugc" className="hover:text-orange-400">University Grants Commission</a></li>
              <li><a href="#ready" className="hover:text-orange-400">Are You Ready</a></li>
              <li><a href="#learn" className="hover:text-orange-400">LEARN</a></li>
              <li><a href="#catalogue" className="hover:text-orange-400">General Catalogue</a></li>
              <li><a href="#ahead" className="hover:text-orange-400">AHEAD Project</a></li>
              <li><a href="#consultancy" className="hover:text-orange-400">Uni Consultancy Services</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg">Connect With Us</h3>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 mt-2 rounded-md w-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <a href="#facebook" className="hover:text-orange-400">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#twitter" className="hover:text-orange-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#linkedin" className="hover:text-orange-400">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#youtube" className="hover:text-orange-400">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a href="#rss" className="hover:text-orange-400">
                <i className="fas fa-rss text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-400">
          © 2024 Paboda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
