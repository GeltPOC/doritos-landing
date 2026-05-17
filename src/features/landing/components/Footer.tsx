export default function Footer() {
  const links = [
    { label: 'Productos', href: '#sabores' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Contacto', href: '#' },
    { label: 'Privacidad', href: '#' },
  ]

  return (
    <footer
      className="py-12 px-6 relative"
      style={{ background: '#0A0300', borderTop: '1px solid rgba(255,107,0,0.1)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3
              className="text-4xl font-black uppercase"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                background: 'linear-gradient(135deg, #FFD700, #FF6B00, #E31837)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              DORITOS
            </h3>
            <p className="text-gray-600 text-sm mt-1">Atrévete al Sabor</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-500 hover:text-[#FF6B00] transition-colors duration-200 text-sm font-bold uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(255,107,0,0.1)',
                  border: '1px solid rgba(255,107,0,0.2)',
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-700 text-xs">
          <p>© {new Date().getFullYear()} Doritos® — PepsiCo. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <span className="text-[#E31837]">❤️</span> y mucho 🔥 crunch
          </p>
        </div>
      </div>
    </footer>
  )
}
