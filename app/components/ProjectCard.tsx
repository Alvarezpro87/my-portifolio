"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  image: string;
  title: string;
  text: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ image, title, text, githubUrl, liveUrl }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-full sm:w-[350px] lg:w-[450px] min-h-[280px] rounded-md cursor-pointer mx-auto mb-8"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Frente do card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Saiba mais &gt;
          </div>
        </div>

        {/* Atrás do card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-4 z-[30] overflow-hidden p-4 bg-black bg-opacity-60 rounded-lg">
            <h1 className="text-white text-xl md:text-2xl font-semibold">{title}</h1>
            {/* Área de texto com rolagem */}
            <div className="text-gray-200 text-[15px] max-h-[80px] md:max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {text}
            </div>
            {/* Botões para GitHub e Deploy */}
            <div className="flex gap-2 mt-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1 text-center bg-blue-500 hover:bg-blue-400 text-white rounded-md text-sm transition duration-300 ease-in-out"
                >
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1 text-center bg-green-500 hover:bg-green-400 text-white rounded-md text-sm transition duration-300 ease-in-out"
                >
                  Ver Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
