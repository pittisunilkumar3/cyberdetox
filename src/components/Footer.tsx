
import { NavLink } from 'react-router-dom';
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-cyberdark to-cyberdark-light text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 mb-6">
              Helping individuals and businesses achieve digital balance and security through innovative cybersecurity and wellness solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-cyberpink/80 hover:to-cyberpurple/80 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-cyberpink/80 hover:to-cyberpurple/80 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-gradient-to-r hover:from-cyberpink/80 hover:to-cyberpurple/80 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Our Solutions', path: '/product' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowUpRight className="h-3 w-3 mr-2" />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Security Assessments',
                'Digital Wellness Programs',
                'Cybersecurity Training',
                'Tech Balance Solutions',
                'Security Monitoring'
              ].map((service) => (
                <li key={service}>
                  <NavLink
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowUpRight className="h-3 w-3 mr-2" />
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <MapPin className="h-4 w-4 text-cyberpink" />
                </div>
                <span className="text-gray-300">
                  123 Digital Avenue<br />
                  Tech District, Innovation City<br />
                  CA 94105, USA
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <Phone className="h-4 w-4 text-cyberorange" />
                </div>
                <a
                  href="tel:+11234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3 shrink-0">
                  <Mail className="h-4 w-4 text-cyberpurple-light" />
                </div>
                <a
                  href="mailto:info@cyberdetox.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@cyberdetox.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative my-12">
          <hr className="border-white/10" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyberdark px-4">
            <div className="flex space-x-3">
              <div className="h-2 w-2 rounded-full bg-cyberorange"></div>
              <div className="h-2 w-2 rounded-full bg-cyberpink"></div>
              <div className="h-2 w-2 rounded-full bg-cyberpurple"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {year} Cyberdetox. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-white transition-colors hover:underline">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="hover:text-white transition-colors hover:underline">Terms of Service</NavLink>
            <NavLink to="/cookies-policy" className="hover:text-white transition-colors hover:underline">Cookies Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
