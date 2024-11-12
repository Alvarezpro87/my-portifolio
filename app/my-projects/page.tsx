"use client";

import ProjectCard from '../components/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountain.jpg)" }}
      className="w-full min-h-screen flex flex-col items-center justify-start bg-center bg-cover px-4 pt-[180px]"
    >
      <h2 className="text-white text-3xl font-semibold mb-8">Meus Projetos</h2>

      {/* Contêiner com altura máxima e rolagem para visualizar todos os projetos */}
      <div className="w-full max-w-[1200px] px-4 h-[calc(100vh-220px)] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
