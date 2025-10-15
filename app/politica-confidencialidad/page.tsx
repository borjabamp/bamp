export default function PoliticaConfidencialidad() {
    return (
        <main className="py-16">
            {/* NAV */}
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

            <div className="container mx-auto px-4 prose prose-slate max-w-3xl">
                <h1>Política de confidencialidad</h1>
                <p><strong>Última actualización:</strong> 15 de octubre de 2025</p>

                <h2>1. Responsable del tratamiento</h2>
                <p>
                    BAMP Digital Partners (“BAMP”). Contacto: <a href="mailto:info@bamp.es">info@bamp.es</a>.
                </p>

                <h2>2. Datos que tratamos</h2>
                <ul>
                    <li>Datos de contacto: nombre, empresa, email y mensaje del formulario.</li>
                    <li>Datos técnicos: IP abreviada, páginas visitadas y eventos básicos (Google Analytics 4).</li>
                </ul>

                <h2>3. Finalidades</h2>
                <ul>
                    <li>Atender solicitudes de información o contacto.</li>
                    <li>Mantener y mejorar el sitio web y su seguridad.</li>
                    <li>Analizar el uso del sitio para mejorar contenidos y servicios.</li>
                    <li>Enviar comunicaciones relacionadas con tu solicitud o servicios de BAMP.</li>
                </ul>

                <h2>4. Bases legales</h2>
                <ul>
                    <li><strong>Interés legítimo</strong> para responder solicitudes y mantener seguridad.</li>
                    <li><strong>Consentimiento</strong> cuando lo otorgues (por ejemplo, comunicaciones).</li>
                    <li><strong>Cumplimiento legal</strong> cuando proceda.</li>
                </ul>

                <h2>5. Plazos de conservación</h2>
                <ul>
                    <li>Consultas: hasta 12 meses desde la última interacción.</li>
                    <li>Datos técnicos: según retención configurada en las herramientas usadas.</li>
                </ul>

                <h2>6. Destinatarios</h2>
                <p>
                    Utilizamos proveedores de alojamiento, analítica o correo que actúan como encargados del tratamiento
                    siguiendo nuestras instrucciones.
                </p>

                <h2>7. Transferencias internacionales</h2>
                <p>
                    Si un proveedor está fuera del EEE, aplicamos garantías adecuadas (cláusulas contractuales tipo).
                </p>

                <h2>8. Derechos de las personas</h2>
                <p>
                    Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad
                    enviando un correo a <a href="mailto:info@bamp.es">info@bamp.es</a>.
                </p>

                <h2>9. Seguridad</h2>
                <p>
                    Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos frente a accesos no autorizados,
                    pérdida o alteración.
                </p>

                <h2>10. Cookies y analítica</h2>
                <p>
                    Usamos Google Analytics 4 para estadísticas agregadas. Puedes gestionar cookies desde tu navegador.
                </p>

                <h2>11. Cambios en esta política</h2>
                <p>
                    Podremos actualizar esta política. La versión vigente estará siempre disponible en esta página.
                </p>

                <p>
                    Si tienes dudas, contacta con <a href="mailto:info@bamp.es">info@bamp.es</a>.
                </p>
            </div>
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
