import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  letmeask,
  rateio,
  bessacare,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor Frontend",
    icon: creator,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Desenvolvedor Web",
    company_name: "Kennen Consultoria",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Junho 2021 - Julho 2023",
    points: [
      "Desenvolver e manter aplicações web utilizando Javascript, React e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produtos e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo  e garantir compatibilidade entre navegadores.",
      "Participar de revisões de código fornecendo feedback construtivo para outros desenvolvedores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Profissional dedicado e orientado a entregas fazendo a diferença em um time de desenvolvimento. Trabalhar com Renato foi uma ótima experiência.",
    name: "Everton",
    designation: "Desenvolvedor Frontend",
    company: "Kennen",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Um dos legados que o Renato deixou para a empresa foi a reformulação do site da empresa, onde ele buscou tecnologias de alto nível para entregar o site com maestria.",
    name: "Richard",
    designation: "Programador",
    company: "Kennen Consultoria",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects = [
  {
    name: "Let me Ask",
    description:
      "Letmeask é um site desenvolvido com o intuito de permitir a criação de salas de Perguntas & Resposta de maneira simples e organizada.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: letmeask,
    source_code_link: "https://github.com/Oliveira-Renato/LetmeAsk",
  },
  {
    name: "Rateio App",
    description:
      "Rateio é uma aplicação de compartilhamento de despesas desenvolvida como parte do meu primeiro MBA em Desenvolvimento Full Stack.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: rateio,
    source_code_link: "https://github.com/Oliveira-Renato/Rateio",
  },
  {
    name: "WebSimples",
    description:
      "Este projeto é uma demonstração de uma inspiração de design de site visualmente atraente e responsivo, habilmente elaborado utilizando tecnologias modernas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bessacare,
    source_code_link: "https://github.com/Oliveira-Renato/website-example",
  },
];

export { services, technologies, experiences, testimonials, projects };
