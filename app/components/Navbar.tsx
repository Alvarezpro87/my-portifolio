"use client";
import React from 'react';
import Image from 'next/image';
import { Socials } from '../../constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex flex-col sm:flex-row justify-between items-center px-4 md:px-20">
  <div>
    <Link href="/" className="flex flex-row gap-3 items-center group">
      <motion.div
        className="relative w-[40px] h-[40px] rounded-full overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Foto do perfil"
          fill
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
      <h1 className="text-white text-[20px] sm:text-[25px] font-semibold">
        Alexandre Cardoso
      </h1>
    </Link>
  </div>
  <a
    href="/AlexandreAlvarez.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-md"
  >
    Download do Currículo
  </a>
  <div className="flex flex-row gap-5 mt-2 sm:mt-0">
    {Socials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ width: '28px', height: '28px', position: 'relative' }}>
          <Image
            src={social.src}
            alt={social.name}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </a>
    ))}
  </div>
</div>
  );
};

export default Navbar;
