export default function GutService() {
    return (
      <main>
        {/* NAV (idéntico al de la home) */}
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logos/bamp-icon.png" alt="BAMP logo" className="w-8 h-8" />
              <span className="font-semibold">BAMP Digital Partners</span>
            </a>
            <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <li><a href="/#servicios" className="hover:text-[var(--primary)]">Qué hacemos</a></li>
              <li><a href="/#metodo" className="hover:text-[var(--primary)]">Método</a></li>
              <li><a href="/#contacto" className="hover:text-[var(--primary)]">Contacto</a></li>
            </ul>
            <a href="/#contacto" className="hidden md:inline-flex pill px-4 py-2 btn-primary font-semibold text-sm">Hablemos</a>
          </nav>
        </header>
  
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold">Marca y Contenido · Estrategia creativa full-funnel</h1>
            <p className="mt-4 text-slate-600">
              Enlazamos narrativa de marca, contenido y activación performance para crecer con coherencia y métricas claras.
            </p>
  
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="card p-6">
                <h3 className="font-semibold mb-1">Estrategia</h3>
                <p className="text-slate-600 text-sm">Posicionamiento, propuesta de valor y architecture messaging.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-1">Contenido</h3>
                <p className="text-slate-600 text-sm">Calendarios, piezas multi-formato y guidelines de canal.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-1">Activación</h3>
                <p className="text-slate-600 text-sm">Campañas full-funnel y experimentación continua.</p>
              </div>
            </div>
  
            <div className="mt-10">
              <a href="/#contacto" className="pill px-6 py-3 btn-primary">Solicitar diagnóstico</a>
            </div>
          </div>
        </section>
      </main>
    );
  }
  