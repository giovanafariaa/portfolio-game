import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data.js";

const icons = [
  ["E-mail", `mailto:${profile.email}`, FaEnvelope],
  ["WhatsApp", `https://wa.me/${profile.whatsapp}`, FaWhatsapp],
  ["LinkedIn", profile.linkedin, FaLinkedin],
  ["GitHub", profile.github, FaGithub],
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);
  const env = import.meta.env;

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: data.name,
    email: data.email,
    message: data.message,
    title: "Nova mensagem do portfólio",
    time: new Date().toLocaleString("pt-BR"),
  },
  { publicKey: env.VITE_EMAILJS_PUBLIC_KEY });
      setStatus({ ok: true, msg: "Mensagem enviada. Respondo em breve!" });
      reset();
    } catch {
      setStatus({ ok: false, msg: "Não foi possível enviar. Tente de novo ou use um dos ícones acima." });
    }
  };

  return (
    <section className="page">
      <h1 className="title">Multiplayer</h1>
      <p className="text">Escolha um canal ou envie uma mensagem.</p>
      <ul className="socials">
        {icons.map(([label, href, Icon]) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon /></a>
          </li>
        ))}
      </ul>
      <form className="panel form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Nome
          <input autoComplete="name" {...register("name", { required: "Informe seu nome.", minLength: { value: 2, message: "Mínimo de 2 letras." } })} />
          {errors.name && <small role="alert">{errors.name.message}</small>}
        </label>
        <label>E-mail
          <input type="email" autoComplete="email" {...register("email", { required: "Informe seu e-mail.", pattern: { value: /^\S+@\S+\.\S+$/, message: "Digite um e-mail válido." } })} />
          {errors.email && <small role="alert">{errors.email.message}</small>}
        </label>
        <label>Mensagem
          <textarea rows="5" {...register("message", { required: "Escreva uma mensagem.", minLength: { value: 10, message: "Mínimo de 10 caracteres." } })} />
          {errors.message && <small role="alert">{errors.message.message}</small>}
        </label>
        <button className="btn" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</button>
        {status && <p role="status" className={status.ok ? "ok" : "err"}>{status.msg}</p>}
      </form>
    </section>
  );
}
