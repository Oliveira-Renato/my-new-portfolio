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
  pgsql,
  vue,
  laravel,
  git,
  figma,
  docker,
  meta,
  building,
  tesla,
  shopify,
  letmeask,
  model,
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
    title: "Desenvolvedor Full Stack",
    icon: web,
  },
  {
    title: "Desenvolvedor Front End",
    icon: creator,
  },
  {
    title: "Desenvolvedor Back End",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vuejs",
    icon: vue,
  },
    {
    name: "Laravel",
    icon: laravel,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "PostgreSql",
    icon: pgsql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company_name: "Bossa Nova Sotheby's International Realty",
    icon: building,
    iconBg: "#383E56",
    date: "Outubro 2024 - Atualmente",
    points: [
      "Atuação na manutenção de sistemas legados e no desenvolvimento de uma nova plataforma web moderna, baseada no projeto Cidade Virtual.",
      "Trabalho com Vue.js, Laravel, PostgreSQL, JavaScript e TypeScript, contribuindo para a definição de arquitetura, desenvolvimento de novas funcionalidades e melhorias contínuas no site.",
      "Responsável por garantir a estabilidade do sistema em produção, permitindo uma transição gradual para soluções mais modernas sem impacto nas operações existentes.",
      "Atuação em fluxo Kanban,com gestão de demandas contínuas via Notion.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    company_name: "Skin & Body Saúde",
    icon: building,
    iconBg: "#383E56",
    date: "Março 2024 - Outubro 2024",
    points: [
      "Atuação no desenvolvimento e manutenção de soluções de e-commerce com foco em desempenho, escalabilidade e experiência do usuário em ambientes desktop e mobile.",
      "Trabalho principalmente com a plataforma Shopify, implementando funcionalidades customizadas e melhorias contínuas.",
      "Desenvolvimento de APIs REST utilizando Node.js, JavaScript e TypeScript, garantindo integrações estáveis, lógica de negócio consistente e fluxo eficiente de dados entre sistemas e serviços de terceiros.",
    ],
  },
  {
    title: "Desenvolvedor Front End",
    company_name: "Kennen Consultoria",
    icon: building,
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
    name: "Portfólio de Modelo",
    description:
      "Um portfólio profissional desenvolvido para uma modelo, com foco em UI moderna, responsividade e experiência visual, inspirado nos layouts atuais de redes sociais como o Instagram.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mux",
        color: "pink-text-gradient",
      },
    ],
    image: model,
    source_code_link: "https://github.com/Oliveira-Renato/mary-mendes",
  },
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
