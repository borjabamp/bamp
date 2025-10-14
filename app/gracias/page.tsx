export default function Gracias() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
            <div className="max-w-md text-center">
                <div
                    className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#2563EB,#8B5CF6)' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Gracias por contactar</h1>
                <p className="text-slate-600 mb-6">Hemos recibido tu mensaje y te responderemos en menos de 24 h hábiles.</p>
                <a href="/" className="pill px-5 py-2 btn-primary font-semibold inline-block">Volver al inicio</a>
            </div>
        </main>
    );
}
