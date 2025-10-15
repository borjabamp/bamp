"use client";
import dynamic from "next/dynamic";
const ServicesCarousel = dynamic(() => import("./components/ServicesCarousel"), { ssr: false });

export default function Page() {
  return (
    <main>
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logos/bamp-icon.png" alt="BAMP logo" className="w-8 h-8" />
            <span className="font-semibold">BAMP Digital Partners</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <li><a href="#servicios" className="hover:text-[var(--primary)]">Qué hacemos</a></li>
            <li><a href="#metodo" className="hover:text-[var(--primary)]">Método</a></li>
            <li><a href="#casos" className="hover:text-[var(--primary)]">Casos</a></li>
            <li><a href="#contacto" className="hover:text-[var(--primary)]">Contacto</a></li>
          </ul>
          <a href="#contacto" className="hidden md:inline-flex pill px-4 py-2 btn-primary font-semibold text-sm">Hablemos</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative bg-fondobrain">
        <div className="container mx-auto px-4 py-28 md:py-40 hero-content min-h-screen flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="badge">Partner Digital</span>
              <span className="text-slate-500 text-sm">Estrategia · Tecnología · IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Estrategia Humana. <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,var(--primary),var(--accent))" }}>Ejecución inteligente.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Conectamos estrategia, tecnología e IA para automatizar procesos, optimizar la captación y tomar mejores decisiones con datos.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contacto" className="pill px-6 py-3 btn-primary">Contáctanos</a>
              <a href="#servicios" className="pill px-6 py-3 btn-ghost">Ver qué hacemos</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section id="servicios" className="py-16 bg-primary-strong sep-top">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Qué hacemos</h2>
          <p className="mt-2 text-slate-100 max-w-2xl">De la oportunidad al impacto medido.</p>
          <div className="mt-8 max-w-3xl mx-auto">
            <ServicesCarousel />
          </div>
        </div>
      </section>


      {/* METODO */}
      <section id="metodo" className="py-16 bg-secundary-strong">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Acompañamiento de partner, no proveedor puntual.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="card p-6">
              <div className="badge mb-3">01</div>
              <h3 className="font-semibold text-lg mb-2">Diagnóstico</h3>
              <p className="text-slate-600">Análisis de negocio, stack y datos. Identificación de quick wins.</p>
            </div>
            <div className="card p-6">
              <div className="badge mb-3">02</div>
              <h3 className="font-semibold text-lg mb-2">Implementación</h3>
              <p className="text-slate-600">Integraciones, automatizaciones y activación de campañas.</p>
            </div>
            <div className="card p-6">
              <div className="badge mb-3">03</div>
              <h3 className="font-semibold text-lg mb-2">Escalado</h3>
              <p className="text-slate-600">Optimización continua, governance y transferencia de conocimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS */}
      {/*
      <section id="casos" className="py-16 bg-tertiary-strong">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Resultados</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="card p-6">
              <h3 className="font-semibold mb-1">Ecommerce moda</h3>
              <p className="text-slate-600">+32% ROAS en 6 semanas con mix Google Ads + Meta + email orquestado por IA.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-1">B2B SaaS</h3>
              <p className="text-slate-600">Chatbot de cualificación que aumenta un 28% las demos y reduce no‑shows.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-1">Servicios locales</h3>
              <p className="text-slate-600">CPL −41% con SEO local, lead scoring y respuestas automáticas.</p>
            </div>
          </div>
        </div>
      </section>
       */}

      {/* CTA */}
      {/*
      <section className="relative bg-fondo3">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-10 border border-slate-200 bg-gradient-to-r from-white to-[#fafafe]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Conecta tu negocio al futuro digital</h3>
                <p className="text-slate-600">Sesión de descubrimiento gratuita. Sin compromiso.</p>
              </div>
              <a href="#contacto" className="pill px-6 py-3 btn-primary">Empezar</a>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CONTACTO */}
      <section id="contacto" className="py-16 bg-ink-strong">
        <div className="flex flex-col justify-center h-full">
          <p className="text-7xl md:text-8xl font-extrabold text-white leading-tight text-center">
            Conecta tu negocio<br />al futuro.
          </p>
        </div>

        <form
          className="card p-6 grid gap-4"
          action="https://formsubmit.co/info@bamp.es"
          method="post"
        >
          <input type="hidden" name="_subject" value="BAMP · Nueva consulta" />
          <input type="hidden" name="_next" value="https://bamp.es/gracias" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-600">Nombre</span>
            <input
              name="nombre"
              required
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-600">Empresa</span>
            <input
              name="empresa"
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-600">Email</span>
            <input
              type="email"
              name="email"
              required
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-slate-600">Mensaje</span>
            <textarea
              name="mensaje"
              rows={5}
              required
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            ></textarea>
          </label>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-600">
            <div>
              O escribe a <a className="link" href="mailto:info@bamp.es">info@bamp.es</a>
            </div>
            <button className="pill px-5 py-2 btn-primary font-semibold" type="submit">Enviar</button>
          </div>

          <p className="text-xs text-slate-500 mt-2">
            Al completar este formulario, aceptas que estás de acuerdo con la
            <a className="link ml-1" href="/politica-confidencialidad">Política de confidencialidad</a> de BAMP.
          </p>
        </form>
      </div>
    </section>

      {/* FOOTER */ }
  <footer className="py-10 border-t border-slate-200 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
      <div className="flex items-center gap-2">
        <img src="/logos/bamp-full.png" alt="BAMP Digital Partners" className="h-10 md:h-12" />
      </div>
      <div className="flex gap-4">
        <a href="#top" className="hover:text-[var(--primary)]">Inicio</a>
        <a href="#servicios" className="hover:text-[var(--primary)]">Qué hacemos</a>
        <a href="#contacto" className="hover:text-[var(--primary)]">Contacto</a>
      </div>
      <div>© {new Date().getFullYear()} · Todos los derechos reservados</div>
    </div>
  </footer>
    </main >
  );
}
