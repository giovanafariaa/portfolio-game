
<!-- README baseado no template do Prof. Dr. João Paulo Aramuni -->

---

# 🎮 Player One | Portfólio Gamificado 👨‍💻

> [!NOTE]
> Portfólio profissional com tema de videogame (preto, roxo e rosa), onde projetos viram **fases**, experiências viram **missões** e a rolagem da página enche uma **barra de XP**.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este projeto é um <b>website de portfólio</b> criado para apresentar minha <i>trajetória</i>, <i>habilidades</i>, <i>projetos</i> e <i>formas de contato</i> de maneira moderna, responsiva e acessível. O site foi desenvolvido com <b>React + Vite</b>, tem versões em <b>português e inglês</b> na seção "Sobre mim", linha do tempo de projetos, relato de experiências e um <b>formulário de contato funcional</b> com envio de e-mail. A hospedagem é gratuita na <b>Vercel</b>.
      </div>
    </td>
    <td>
      <div>
        <img src="./public/projects/logo.svg" alt="Logo do Projeto" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)](#) ![React](https://img.shields.io/badge/React-18.3.1-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5.4-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-007ec6?style=for-the-badge&logo=vercel&logoColor=white) ![EmailJS](https://img.shields.io/badge/EmailJS-4.4-007ec6?style=for-the-badge&logo=maildotru&logoColor=white) ![GitHub last commit](https://img.shields.io/github/last-commit/SEU-USUARIO/portfolio-game?style=for-the-badge&logo=clockify) ![GitHub repo size](https://img.shields.io/github/repo-size/SEU-USUARIO/portfolio-game?style=for-the-badge&logo=files)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [Acesse o Portfólio](https://portfolio-game-8dqisd3vx-giovanafariaa.vercel.app)
  > 💻 **Descrição:** Site publicado em produção na Vercel. 
* 🎨 **Protótipos (Figma):** [Wireframes das páginas](https://www.figma.com/design/L8Jfg1Fm4TWv40w91zUevG/Untitled?node-id=2-2&p=f&t=4MYy4pIcCaZXzSTE-0)
  > 🖌️ **Descrição:** Wireframes de média fidelidade das quatro páginas.
* 📁 **Repositório:** [GitHub](https://github.com/giovanafariaa/portfolio-game)
  > 📚 **Descrição:** Código-fonte completo do projeto.

---

## 📝 Sobre o Projeto
Todo profissional de tecnologia precisa de um lugar onde recrutadores encontrem rapidamente seus projetos, experiências e contatos. Este portfólio nasceu como **trabalho acadêmico** da disciplina de Desenvolvimento e Integração de Aplicações Web e também como vitrine profissional para buscar o **primeiro estágio em desenvolvimento**.

- **Qual problema resolve:** reúne em um só endereço quem eu sou, o que já construí e como falar comigo.
- **Contexto:** acadêmico e profissional (graduação em Engenharia de Software e curso técnico em Informática para Desenvolvimento Web/Mobile).
- **Diferencial:** identidade visual gamificada, que reforça meu interesse por jogos e interfaces com personalidade.

---

## ✨ Funcionalidades Principais
- 🧑‍🎓 **Sobre mim bilíngue:** apresentação em português e inglês, trocada por um botão PT/EN.
- 📊 **Atributos:** habilidades exibidas como barras de nível.
- 🕹️ **Projetos em linha do tempo:** do mais antigo ao mais recente, com nome, descrição, tecnologias, link do GitHub e imagem/GIF.
- 🎯 **Experiências:** estágios, freelas, open source e eventos, com instituição, cargo, período e descrição.
- 📨 **Contato:** ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário com envio de e-mail via EmailJS.
- ✅ **Validações:** nome, e-mail e mensagem validados antes do envio, com mensagens de erro claras.
- 📱 **Responsivo e acessível:** menu adaptado ao celular, foco visível no teclado e animações desativadas para quem prefere menos movimento.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Biblioteca:** React 18.3.1
* **Linguagem:** JavaScript ES6+ (JSX)
* **Estilização:** CSS puro, com variáveis CSS e fontes Press Start 2P e Chakra Petch (Google Fonts)
* **Roteamento:** React Router DOM 6.26
* **Formulários:** React Hook Form 7.53
* **Ícones:** React Icons 5.3
* **E-mail:** EmailJS (`@emailjs/browser` 4.4)
* **Build Tool:** Vite 5.4

### 🖥️ Back-end
* **Não se aplica.** O site é uma SPA estática. O envio de e-mail é feito direto do navegador pela API do EmailJS, sem servidor próprio.

### 📱 Mobile
* **Não se aplica.** O site é responsivo e funciona em navegadores de celular.

### ⚙️ Infraestrutura & DevOps
* **Cloud:** Vercel (plano gratuito)
* **Controle de versão:** Git e GitHub
* **Prototipação:** Figma

### 📦 Dependências do projeto

| Pacote | Tipo | Uso |
| :--- | :--- | :--- |
| `react`, `react-dom` | dependência | Interface |
| `react-router-dom` | dependência | Navegação entre as páginas |
| `react-hook-form` | dependência | Formulário e validações |
| `@emailjs/browser` | dependência | Envio de e-mail pelo front-end |
| `react-icons` | dependência | Ícones de contato |
| `vite` | desenvolvimento | Build e servidor local |
| `@vitejs/plugin-react` | desenvolvimento | Suporte a React no Vite |

---

## 🏗 Arquitetura

**Visão geral:** aplicação *single page* (SPA) em React, organizada em páginas e dados separados da interface.

- **Páginas (`src/pages`):** `About`, `Projects`, `Experience` e `Contact`, uma por rota.
- **Layout (`src/App.jsx`):** cabeçalho com menu e barra de XP, área de conteúdo com as rotas e rodapé.
- **Dados (`src/data.js`):** todo o conteúdo (perfil, projetos, experiências) fica em um único arquivo, separado dos componentes. Para atualizar o portfólio, não é preciso mexer no código das páginas.
- **Fluxo do formulário:** React Hook Form valida os campos, depois o EmailJS envia a mensagem para o meu e-mail.
- **Roteamento em produção:** o `vercel.json` redireciona todas as rotas para o `index.html`, para que links diretos como `/projetos` funcionem.
- **Decisão importante:** não ter back-end mantém o custo zero e o deploy simples. A limitação é depender do EmailJS (200 envios por mês no plano gratuito).

```
Navegador ──► React (SPA na Vercel) ──► EmailJS ──► Meu e-mail
                   │
                   └── lê src/data.js (perfil, projetos, experiências)
```

---

## 🔧 Instalação e Execução

### Pré-requisitos
* **Node.js:** versão LTS (18.x ou superior)
* **Gerenciador de pacotes:** npm
* **Conta no EmailJS** (gratuita) para o formulário funcionar

---

### 🔑 Variáveis de Ambiente

Crie um arquivo **`.env`** na raiz do projeto (mesma pasta do `package.json`), copiando o `.env.example`:

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço de e-mail no EmailJS. | `service_abc1234` |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template de e-mail. | `template_xyz5678` |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública da conta EmailJS. | `AbCdEfGhIjKlMnOp` |

> **Obs:** em projetos **Vite**, as variáveis precisam começar com `VITE_` para ficarem disponíveis no código do navegador.

**Configuração do template no EmailJS:** o código envia estas variáveis, então use-as no template:

```
Assunto: {{title}}
Nome: {{name}}
E-mail: {{email}}
Mensagem: {{message}}
Data: {{time}}
```

No template, configure **To Email** com o e-mail que vai receber as mensagens e **Reply To** como `{{email}}`.

---

### 📦 Instalação de Dependências

```bash
git clone https://github.com/giovanafariaa/portfolio-game.git
cd portfolio-game
npm install
```

---

### ⚡ Como Executar a Aplicação

```bash
npm run dev
```
🎨 *O site estará disponível em **http://localhost:5173**.*

Para gerar a versão de produção e testá-la localmente:

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy

O deploy é feito na **Vercel**, com o preset Vite detectado automaticamente.

1. **Envie o projeto para o GitHub.**
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. Em **Settings → Environment Variables**, cadastre as 3 variáveis do EmailJS (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).
4. Clique em **Deploy**.
5. Copie o link gerado para a seção [Links Úteis](#-links-úteis).

> 🔑 **Atenção:** sem as variáveis cadastradas na Vercel, o formulário não envia e-mails no site publicado. Depois de cadastrá-las, faça um novo deploy.

Cada `git push` na branch principal gera um novo deploy automaticamente.

---

## 📂 Estrutura de Pastas

```
.
├── .env.example           # 🧩 Modelo das variáveis de ambiente (sem valores reais).
├── .gitignore             # 🧹 Ignora node_modules, dist e .env.
├── README.md              # 📘 Documentação principal do projeto.
├── index.html             # 📄 HTML base, fontes e título do site.
├── package.json           # 📦 Dependências e scripts.
├── vercel.json            # ☁️ Redirecionamento de rotas para a SPA.
├── vite.config.js         # ⚙️ Configuração do Vite.
│
├── /public                # 📂 Arquivos estáticos.
│   ├── logo.svg           # 🎮 Logo do projeto.
│   └── /projects          # 🖼️ Imagens e GIFs dos projetos.
│
└── /src                   # 📂 Código-fonte React
    ├── main.jsx           # 🚪 Ponto de entrada da aplicação.
    ├── App.jsx            # 🧱 Cabeçalho (menu e XP), rotas e rodapé.
    ├── data.js            # 📝 Conteúdo editável: perfil, projetos e experiências.
    ├── styles.css         # 🎨 Estilos globais e tema gamificado.
    └── /pages             # 📄 Páginas do site
        ├── About.jsx      # 🧑‍🎓 Sobre mim (PT/EN) e atributos.
        ├── Projects.jsx   # 🕹️ Linha do tempo de projetos.
        ├── Experience.jsx # 🎯 Experiências profissionais.
        └── Contact.jsx    # 📨 Ícones de contato e formulário.
```

---

## 🧪 Testes

O projeto ainda não possui testes automatizados. A verificação foi feita manualmente:

```bash
npm run build     # confirma que o projeto compila sem erros
npm run preview   # testa a versão de produção localmente
```

Checklist manual: navegação entre páginas, botão PT/EN, validações do formulário, envio de e-mail e layout no celular.

---

## 🔗 Documentações utilizadas

* 📖 **React:** [react.dev](https://react.dev)
* 📖 **Vite:** [vite.dev](https://vite.dev/)
* 📖 **React Router:** [reactrouter.com](https://reactrouter.com/)
* 📖 **React Hook Form:** [react-hook-form.com](https://react-hook-form.com/)
* 📖 **EmailJS:** [emailjs.com/docs](https://www.emailjs.com/docs/)
* 📖 **React Icons:** [react-icons.github.io](https://react-icons.github.io/react-icons/)
* 📖 **Vercel:** [vercel.com/docs](https://vercel.com/docs)

---

## 👥 Autores

| 👤 Nome | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|-----------------|-------------|-----------|
| Giovana Faria | [github.com/giovanafariaa](https://github.com/giovanafariaa) | [linkedin.com/in/giovanafariaa](https://www.linkedin.com/in/giovanafariaa) | [giovanafmartins024@gmail.com](mailto:giovanafmartins024@gmail.com) |

---

## 🤝 Contribuição

1. Faça um `fork` do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`), seguindo o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
4. Faça o `push` para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.

---

## 🙏 Agradecimentos

* [**Prof. Dr. João Paulo Aramuni e Rommel**] - Pela proposta do trabalho e pelo template de documentação.
* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional e estrutura acadêmica.
* Comunidades de **React**, **Vite** e **EmailJS**, pela documentação aberta que tornou este projeto possível.

---

## 📄 Licença

Este projeto é distribuído sob a **Licença MIT**.

---