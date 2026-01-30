'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent text-white fixed w-full top-0 z-50">
      <nav className="max-w-284 mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="relative h-8 w-12">
              <Image
                src="/images/SSA-Logo_two.png"
                alt="SSA Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {data?.navLinks?.map((link) => (
              <Link
                key={link.id || link.label}
                href={link.href}
                className="text-sm font-matter hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <button className="px-9 py-2.5 border-2 border-primary rounded-full hover:bg-white hover:text-black transition-all duration-300 rounded text-sm font-matter font-semibold">
            {data?.ctaText || 'Contact Us'}
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="max-w-284 mx-auto px-4 py-6 flex flex-col gap-4">
            {data?.navLinks?.map((link) => (
              <Link
                key={link.id || link.label}
                href={link.href}
                className="text-sm font-matter hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <button className="px-9 py-2.5 border-2 border-primary rounded-full hover:bg-white hover:text-black transition-all duration-300 rounded text-sm font-matter font-semibold">
              {data?.ctaText || 'Contact Us'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
