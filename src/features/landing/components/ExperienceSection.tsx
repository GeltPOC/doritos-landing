export default function ExperienceSection() {
  const stats = [
    { value: '50+', label: 'Años de sabor', icon: '🏆' },
    { value: '100M+', label: 'Fans worldwide', icon: '🌍' },
    { value: '20+', label: 'Sabores únicos', icon: '🎨' },
    { value: '#1', label: 'Snack favorito', icon: '⭐' },
  ]

  const reasons = [
    {
      icon: '🔥',
      title: 'Sabor Explosivo',
      desc: 'Cada chip está recubierto con la mezcla perfecta de especias para un sabor que explota en tu boca.',
    },
    {
      icon: '💎',
      title: 'Calidad Premium',
      desc: 'Elaborados con los mejores ingredientes seleccionados para garantizar el crunch perfecto en cada mordida.',
    },
    {
      icon: '🎯',
      title: 'Innovación Constante',
      desc: 'Siempre empujando los límites del sabor con nuevas combinaciones que nunca olvidarás.',
    },
    {
      icon: '🤝',
      title: 'Para Compartir',
      desc: 'Perfectos para cualquier ocasión. Las mejores experiencias se viven compartiendo una bolsa de Doritos.',
    },
  ]

  return (
    <section id="experiencia" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #1A0A00 0%, #0D0500 50%, #1A0A00 100%)' }}
      />

      {/* Large decorative text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black uppercase select-none pointer-events-none"
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          color: 'rgba(255,107,0,0.03)',
          whiteSpace: 'nowrap',
        }}
      >
        DORITOS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl"
              style={{
                background: 'rgba(255,107,0,0.05)',
                border: '1px solid rgba(255,107,0,0.15)',
              }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div
                className="text-4xl font-black"
                style={{
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  background: 'linear-gradient(135deg, #FFD700, #FF6B00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] text-sm font-black tracking-[0.3em] uppercase">
            ¿Por qué Doritos?
          </span>
          <h2
            className="text-5xl md:text-7xl font-black uppercase text-white mt-2"
            style={{
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 0 #E31837',
            }}
          >
            LA EXPERIENCIA
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex gap-6 p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,107,0,0.15)',
              }}
            >
              <div
                className="text-5xl shrink-0 w-16 h-16 flex items-center justify-center rounded-xl"
                style={{ background: 'rgba(255,107,0,0.1)' }}
              >
                {reason.icon}
              </div>
              <div>
                <h3
                  className="text-2xl font-black uppercase text-white mb-2"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fire banner */}
        <div
          className="mt-16 p-8 rounded-3xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #E31837 0%, #FF6B00 50%, #FFD700 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
            }}
          />
          <div className="relative z-10">
            <p
              className="text-4xl md:text-6xl font-black uppercase text-white"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '2px 2px 0 rgba(0,0,0,0.3)',
              }}
            >
              🔥 ONCE YOU POP... 🔥
            </p>
            <p className="text-white text-xl font-bold mt-2 opacity-90">¡No Puedes Parar!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
