'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const chipsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!chipsRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      chipsRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A00] via-[#3D0F00] to-[#1A0A00]" />

      {/* Animated fire circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF6B00] opacity-10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#E31837] opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[#FFD700] opacity-5 blur-3xl animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Floating chip decorations */}
      <div
        ref={chipsRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
      >
        <ChipDecor style={{ top: '10%', left: '5%', fontSize: '4rem', animationDelay: '0s' }} />
        <ChipDecor style={{ top: '20%', right: '8%', fontSize: '3rem', animationDelay: '0.5s' }} />
        <ChipDecor style={{ top: '60%', left: '3%', fontSize: '2.5rem', animationDelay: '1s' }} />
        <ChipDecor
          style={{ bottom: '15%', right: '5%', fontSize: '3.5rem', animationDelay: '1.5s' }}
        />
        <ChipDecor style={{ top: '45%', right: '15%', fontSize: '2rem', animationDelay: '0.3s' }} />
        <ChipDecor
          style={{ bottom: '30%', left: '12%', fontSize: '2.8rem', animationDelay: '0.8s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo text */}
        <div className="mb-6 inline-block">
          <span className="text-[#FF6B00] text-xl font-black tracking-widest uppercase border border-[#FF6B00] px-4 py-1 rounded">
            ★ SABOR ATREVIDO ★
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-8xl md:text-[10rem] font-black uppercase leading-none mb-4 tracking-tighter"
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B00 40%, #E31837 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 30px rgba(255, 107, 0, 0.6))',
          }}
        >
          DORITOS
        </h1>

        {/* Subheadline */}
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-white mb-6 tracking-wide"
          style={{ fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '2px 2px 0 #8B0000' }}
        >
          ATRÉVETE AL SABOR
        </h2>

        <p className="text-[#FFB347] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          El crunch más intenso. Los sabores más explosivos. Una experiencia que te desafía a más.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#sabores"
            className="group relative px-10 py-4 text-xl font-black uppercase tracking-widest text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #E31837, #FF6B00)',
              boxShadow: '0 0 30px rgba(255, 107, 0, 0.5)',
            }}
          >
            <span className="relative z-10">Ver Sabores</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="#experiencia"
            className="px-10 py-4 text-xl font-black uppercase tracking-widest text-[#FF6B00] rounded-full border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all duration-300 hover:scale-105"
          >
            Descúbrelos
          </a>
        </div>

        {/* Big chip emoji decoration */}
        <div
          className="mt-16 text-9xl md:text-[12rem] leading-none select-none"
          style={{ filter: 'drop-shadow(0 0 40px rgba(255, 107, 0, 0.7))' }}
        >
          🔥
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 33.3C1200 26.7 1320 13.3 1380 6.7L1440 0V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#1A0A00"
          />
        </svg>
      </div>
    </section>
  )
}

function ChipDecor({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute select-none animate-bounce"
      style={{
        ...style,
        animationDuration: '3s',
        opacity: 0.3,
        filter: 'drop-shadow(0 0 10px rgba(255, 107, 0, 0.8))',
      }}
    >
      🔺
    </div>
  )
}
