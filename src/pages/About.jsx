import { useState } from "react";
import { profile } from "../data.js";

export default function About() {
  const [lang, setLang] = useState("pt");
  const t = lang === "pt"
    ? { title: "Sobre mim", start: "Ver projetos", skills: "Atributos" }
    : { title: "About me", start: "See projects", skills: "Attributes" };
  return (
    <section className="page">
      <div className="hero">
        <p className="blink">PRESS START</p>
        <h1>{profile.name}</h1>
        <p className="sub">Nível {profile.level} · Desenvolvedor Web</p>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h2>{t.title}</h2>
          <div className="toggle" role="group" aria-label="Idioma / Language">
            <button aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>PT</button>
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
        <p lang={lang} className="text">{profile.about[lang]}</p>
        <dl className="facts">
          {profile.facts[lang].map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
      </div>
      <div className="panel">
        <h2>{t.skills}</h2>
        <ul className="skills">
          {profile.skills.map(([name, lvl]) => (
            <li key={name}>
              <span>{name}</span>
              <div className="bar" role="img" aria-label={`${name}: ${lvl}%`}><i style={{ width: `${lvl}%` }} /></div>
              <b>{lvl}</b>
            </li>
          ))}
        </ul>
        <a className="btn" href="/projetos">{t.start}</a>
      </div>
    </section>
  );
}
