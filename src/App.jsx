import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { profile } from "./data.js";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";

const links = [["/", "Sobre"], ["/projetos", "Projetos"], ["/experiencias", "Experiências"], ["/contato", "Contato"]];

function Header() {
  const [open, setOpen] = useState(false);
  const [xp, setXp] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setXp(h > 0 ? Math.min(100, (scrollY / h) * 100) : 100);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);
  return (
    <header className="hud">
      <div className="hud-bar">
        <NavLink to="/" className="logo">▶ {profile.handle}</NavLink>
        <button className="menu-btn" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "nav open" : "nav"} aria-label="Principal">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
          ))}
        </nav>
      </div>
      <div className="xp" role="progressbar" aria-label="Progresso da página" aria-valuenow={Math.round(xp)}>
        <span style={{ width: `${xp}%` }} />
      </div>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/experiencias" element={<Experience />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Feito com React + Vite.</p>
        <p>Pressione ↑ para continuar jogando.</p>
      </footer>
    </>
  );
}
