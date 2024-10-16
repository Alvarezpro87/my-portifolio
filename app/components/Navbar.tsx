import React from 'react';
import Image from 'next/image';
import { Socials } from '../../constants';

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>
          <Image
            src="/perfil.jpeg"
            alt='Foto do perfil'
            width={40}
            height={40}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
        <h1 className='text-white text-[25px] font-semibold'>Alexandre Cardoso</h1>
      </div>
      <div className='flex flex-row gap-5 mb-2'>
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
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
