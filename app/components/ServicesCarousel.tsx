"use client";
import { useEffect, useRef, useState } from "react";

type Item = { tag: string; title: string; desc: string };
const items: Item[] = [
  { tag: "Estrategia", title: "Diagnóstico y roadmap", desc: "Auditoría de madurez, objetivos y plan de evolución digital." },
  { tag: "IA & Automatización", title: "Chatbots y workflows", desc: "Asistentes, RPA ligero e integración con CRM y APIs." },
  { tag: "Performance", title: "Growth y paid media", desc: "Campañas multicanal con optimización continua y testing." },
  { tag: "Data & Analytics", title: "Medición y dashboards", desc: "GA4, Tag Manager y paneles ejecutivos en tiempo real." },
];

export default function ServicesCarousel() {
  const [i, setI] = useState(0);
  const hoverRef = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) setI((p) => (p + 1) % items.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className="relative card p-0 overflow-hidden"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${i * 100}%)`, width: `${items.length * 100}%` }}
      >
        {items.map(({ tag, title, desc }, idx) => (
          <section key={idx} className="w-full shrink-0 p-8 md:p-10">
            <div className="chip mb-3 inline-block">{tag}</div>
            <h3 className="font-semibold text-2xl mb-2">{title}</h3>
            <p className="text-slate-600 max-w-prose">{desc}</p>
          </section>
        ))}
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir al slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${i === idx ? "bg-[var(--primary)]" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
