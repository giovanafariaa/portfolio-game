import { FaGithub } from "react-icons/fa";
import { projects } from "../data.js";

export default function Projects() {
  const list = [...projects].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <section className="page">
      <h1 className="title">Fases concluídas</h1>
      <p className="text">Do mais antigo ao mais recente. Cada fase é um projeto.</p>
      <ol className="timeline">
        {list.map((p, i) => (
          <li key={p.name} className="stage">
            <span className="node" aria-hidden="true">{i + 1}</span>
            <article className="panel">
              <time dateTime={p.date}>{p.date}</time>
              <h2>{p.name}</h2>
              <img src={p.image} alt={`Tela do projeto ${p.name} em funcionamento`} loading="lazy" />
              <p className="text">{p.desc}</p>
              <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <a className="btn" href={p.repo} target="_blank" rel="noreferrer"><FaGithub /> Ver repositório</a>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
