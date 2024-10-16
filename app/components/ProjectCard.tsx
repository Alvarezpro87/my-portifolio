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
      className='w-[450px] h-[280px] rounded-md cursor-pointer'>
      <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}>
        {/* frente do card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
          <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
            Learn more &gt;
          </div>
        </div>
        {/* Atrás do card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />
          <div className='flex flex-col gap-5 z-[30] overflow-hidden'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            {/* Area de texto com rolagem */}
            <div className='text-gray-200 text-[15px] h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'>
              {text}
            </div>
            {/* Links clicáveis para o GitHub e deploy */}
            <div className='flex gap-4 mt-2'>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 underline">
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 underline">
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
