import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "SpringBoot",
    Image: "/springboot.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "C#",
    Image: "/csharp.png",
    width: 80,
    height: 80,
  },
  {
    name: ".net",
    Image: "/dotnet.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Docker",
    Image: "/docker.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Azure",
    Image: "/azure.png",
    width: 80,
    height: 40,
  },
  {
    name: "Postgres",
    Image: "/postgres.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "WhatsApp",
    src: "/whatsapp.svg",  
    url: "https://wa.me/61982992727" 
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",  
    url: "https://www.linkedin.com/in/alvarez87/" 
  },
  {
    name: "GitHub",
    src: "/github.svg",  
    url: "https://github.com/Alvarezpro87" 
  }, 
  {
    name: "Instagram",
    src: "/instagram.svg",
    url: "https://www.instagram.com/xandaum87/"
  },
];
export const Projects = [
  {
    title: "Minimal API com Autenticação JWT em ASP.NET Core",
    text: "Este projeto é uma API mínima desenvolvida em ASP.NET Core que gerencia administradores e veículos. Ele implementa autenticação e autorização usando tokens JWT, e utiliza o Entity Framework Core com SQL Server para persistência de dados.",
    src: "/minimalapi.png",
    githubUrl: "https://github.com/Alvarezpro87/Bootcamp-XP-Inc/tree/main/Projeto%20carro/minimal-api#uso-do-swagger",
  },
  {
    title: "Gestão de Contribuição",
    text: "Este projeto é uma API REST desenvolvida para gerenciar contribuições de contribuintes, possibilitando cálculo do tempo total de contribuição, e o valor total atualizado das contribuições com base nas aliquotas aplicáveis. Tecnologias utilizadas Java, Spring Boot, PostgreSQL, React e typescript.",
    src: "/gestaocontribuicao.png",
    githubUrl: "https://github.com/Alvarezpro87/FilmFinder",
  },
  {
    title: "FilmFinder",
    text: "É uma aplicação web que permite aos usuários buscar, favoritar e compartilhar filmes de uma API. A aplicação consiste em um frontend construído com React e TypeScript e um backend utilizando Java com Spring Boot e Docker. O banco de dados utilizado é o PostgreSQL, e o projeto é containerizado utilizando Docker.",
    src: "/filmfinder.png",
    githubUrl: "https://github.com/Alvarezpro87/Gestao-Contribuicao",
    liveUrl: "https://frontend-bzi6.onrender.com/",
  },
  {
    title: "To Do List",
    text: "Este projeto foi desenvolvido como parte do teste técnico proposto pela Legaplan. A aplicação permite adicionar, concluir e remover tarefas, com persistência local dos dados no navegador. Foram utilizados  React e Next.js. ",
    src: "/ProjetoToDoList.png",
    githubUrl: "https://github.com/Alvarezpro87/TodoListChalange",
    liveUrl: "https://todo-list-chalange.vercel.app/",
  },
  {
    title: "Desafio Anéis do Poder - Full Stack Application",
    text: "Esta é a conclusão do Desafio Anéis do Poder, uma aplicação Full Stack desenvolvida com React (Vite) no frontend, Node.js (TypeScript) no backend e PostgreSQL como banco de dados. Este projeto pode ser visualizado via web na nuvem até a data 04/01/2024 ",
    src: "/desafio-aneis-do-poder.png",
    githubUrl: "https://github.com/Alvarezpro87/Desafio-aneis-do-Poder",
    liveUrl: "https://desafio-aneis-do-poder.vercel.app",
  },
  {
    title: "Docker Gen",
    text: "Este projeto é uma aplicação web que permite criar e gerenciar containers Docker automaticamente, gerando Dockerfiles e executando contêineres com base nas tecnologias selecionadas pelo usuário. ",
    src: "/dockergen.png",
    githubUrl: "https://github.com/Alvarezpro87/DockerGen.git",
    
  }
  
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];