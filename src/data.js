// ✏️ EDITE AQUI: todo o conteúdo do site vem deste arquivo.
export const profile = {
  name: "Giovana Faria Martins",
  handle: "PLAYER ONE",
  level: 18,
  email: "giovanafmartins024@gmail.com",
  whatsapp: "5531985873475",
  linkedin: "https://www.linkedin.com/in/giovanafariaa",
  github: "https://github.com/giovanafariaa",
  about: {
    about: {
  pt: "Estudante de Engenharia de Software e formada no curso técnico de Informática para Desenvolvimento Web/Mobile. Apaixonada por transformar ideias em produtos web, atuo com front-end (React e HTML) e back-end, curto interfaces com personalidade e busco meu primeiro estágio em desenvolvimento.",
  en: "Software Engineering student and graduate of the technical course in Computer Science for Web/Mobile Development. I love turning ideas into web products, work with front-end (React and HTML) and back-end, enjoy interfaces with personality, and I'm looking for my first development internship.",
},
  },
  facts: {
  pt: [["Graduação", "Engenharia de Software (cursando)"], ["Formação técnica", "Curso Técnico em Informática para Desenvolvimento Web/Mobile"], ["Área", "Desenvolvimento Web"], ["Interesses", "Back-end, APIs, banco de dados"], ["Objetivo", "Estágio em desenvolvimento"]],
  en: [["Degree", "Software Engineering (in progress)"], ["Technical education", "Technical Course in Computer Science for Web/Mobile Development"], ["Field", "Web Development"], ["Interests", "Back-end, APIs, databases"], ["Goal", "Development internship"]],
},
  skills: [["React", 80], ["JavaScript", 85], ["Node.js", 65], ["SQL", 75], ["Git", 75], ["Java", 70]],
};

// A página Projetos ordena por "date" (mais antigo → mais recente).
export const projects = [
  { name: "Site Inicial", date: "2024-06", desc: "Primeiro projeto em HTML e CSS", tech: ["HTML", "CSS"], repo: "https://github.com/giovanafariaa/siteogani", image: "/projects/site-01.png" },
  { name: "Calculadora de IMC", date: "2026-08", desc: "Calculadora de IMC com Java", tech: ["Java"], repo: "https://github.com/giovanafariaa/Pratica1-POO", image: "/projects/calculadora.png" },
  { name: "API de Produtos", date: "2026-09", desc: "CRUD de Produtos com Express e JavaScript", tech: ["Node.js", "Express"], repo: "https://github.com/giovanafariaa/Teste-De-API-Node.git", image: "/projects/api-produtos.png" },
];

export const experiences = [
  { org: "Colegio Santa Maria Minas - Nova Lima", role: "Estagiário de Auxiliar no Laboratorio de Informatica", period: "Fev 2025 – Dec 2025", type: "Estágio", desc: "Auxilio de alunos e professores no uso de notebooks e programas basicos de apredizagem de programação" }
];
