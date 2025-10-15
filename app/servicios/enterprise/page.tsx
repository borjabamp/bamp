export default function Enterprise() {
    return (
        <main>
            {/* NAV */}
            <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
                <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3">
                        <img src="/logos/bamp-icon.png" alt="BAMP logo" className="w-8 h-8" />
                        <span className="font-semibold">BAMP Digital Partners</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                        <li className="relative group">
                            <a href="/servicios" className="hover:text-[var(--primary)] inline-flex items-center gap-1">
                                Qué hacemos
                                <svg width="14" height="14" viewBox="0 0 20 20" className="opacity-60"><path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                            </a>
                            {/* Dropdown */}
                            <div className="absolute left-0 mt-2 hidden group-hover:block">
                                <div className="card p-3 min-w-[220px]">
                                    <a href="/servicios" className="block px-3 py-2 rounded hover:bg-slate-50">Vista general</a>
                                    <a href="/servicios/gut" className="block px-3 py-2 rounded hover:bg-slate-50">Marca y Contenido</a>
                                    <a href="/servicios/digital-evolution" className="block px-3 py-2 rounded hover:bg-slate-50">Evolución Digital</a>
                                    <a href="/servicios/enterprise" className="block px-3 py-2 rounded hover:bg-slate-50">Enterprise Platforms</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="/#metodo" className="hover:text-[var(--primary)]">Método</a></li>
                        <li><a href="/#contacto" className="hover:text-[var(--primary)]">Contacto</a></li>
                    </ul>
                    <a href="/#contacto" className="hidden md:inline-flex pill px-4 py-2 btn-primary font-semibold text-sm">Hablemos</a>
                </nav>
            </header>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold">Enterprise Platforms · Transformación sobre tu stack</h1>
                    <p className="mt-4 text-slate-600">
                        Orquestamos SAP, Salesforce, Microsoft, Google y OpenAI para optimizar procesos y operaciones sostenibles.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <div className="card p-6">
                            <h3 className="font-semibold mb-1">Procesos</h3>
                            <p className="text-slate-600 text-sm">Mapeo, automatización y gobierno de datos.</p>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-semibold mb-1">Integraciones</h3>
                            <p className="text-slate-600 text-sm">APIs, ETL y conectores certificados.</p>
                        </div>
                        <div className="card p-6">
                            <h3 className="font-semibold mb-1">Adopción</h3>
                            <p className="text-slate-600 text-sm">Capacitación, soporte y change management.</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a href="/#contacto" className="pill px-6 py-3 btn-primary">Solicitar diagnóstico</a>
                    </div>
                </div>
            </section>
            {/* FOOTER */}
            <footer className="py-10 border-t border-slate-200 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
                    <div className="flex items-center gap-2">
                        <img src="/logos/bamp-full.png" alt="BAMP Digital Partners" className="h-10 md:h-12" />
                    </div>
                    <div className="flex gap-4">
                        <a href="/" className="hover:text-[var(--primary)]">Inicio</a>
                        <a href="/#servicios" className="hover:text-[var(--primary)]">Qué hacemos</a>
                        <a href="/#contacto" className="hover:text-[var(--primary)]">Contacto</a>
                    </div>
                    <div>© {new Date().getFullYear()} · Todos los derechos reservados</div>
                </div>
            </footer>
        </main>
    );
}
