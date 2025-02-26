"use client";
import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform
} from 'framer-motion';

interface Props {
  image: string;
  title: string;
  text: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ image, title, text, githubUrl, liveUrl }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Valores para o efeito de tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-20, 20], [10, -10]);
  const rotateY = useTransform(x, [-20, 20], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 10);
    y.set(posY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {/* Cartão com efeito de tilt */}
      <motion.div
        ref={cardRef}
        className="relative cursor-pointer rounded-xl overflow-hidden shadow-2xl"
        style={{ perspective: 1000, rotateX: rotateX, rotateY: rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay gradiente para destaque */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold drop-shadow-lg">{title}</h2>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal com informações detalhadas */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-4"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar no conteúdo
            >
              <div
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="mb-6 text-gray-700">{text}</p>
                <div className="flex flex-wrap gap-4">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                      Ver Deploy
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
