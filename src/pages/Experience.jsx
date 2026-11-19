import { experiences } from "../data.js";

export default function Experience() {
  return (
    <section className="page">
      <h1 className="title">Missões</h1>
      <p className="text">Estágios, freelas, open source e eventos técnicos.</p>
      <ul className="quests">
        {experiences.map((e) => (
          <li key={e.org + e.period} className="panel">
            <span className="badge">{e.type}</span>
            <h2>{e.org}</h2>
            <p className="role">{e.role} · {e.period}</p>
            <p className="text">{e.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
