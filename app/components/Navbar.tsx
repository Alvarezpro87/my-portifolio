"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Socials } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Barra principal */}
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Área do perfil */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/perfil.jpeg"
              alt="Foto do perfil"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="text-white text-xl font-bold">
            Alexandre Cardoso
          </span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/alexandre-cardoso-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-md"
          >
            Download do Currículo
          </Link>
          <div className="flex items-center gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src={social.src}
                    alt={social.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Botão hamburger para mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/alexandre-cardoso-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-md text-center"
              >
                Download do Currículo
              </Link>
              <div className="flex items-center justify-center gap-4">
                {Socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-7 h-7">
                      <Image
                        src={social.src}
                        alt={social.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
