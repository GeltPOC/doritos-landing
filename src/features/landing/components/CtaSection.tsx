'use client'
import { useState } from 'react'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0500]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, #3D0F00 0%, transparent 70%)' }}
      />

      {/* Decorative chips border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #E31837, #FF6B00, #FFD700, #FF6B00, #E31837)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #E31837, #FF6B00, #FFD700, #FF6B00, #E31837)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative emoji row */}
        <div className="text-3xl mb-8 space-x-4 opacity-60">
          {['🔺', '🔥', '🔺', '🔥', '🔺', '🔥', '🔺'].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>

        <span className="text-[#FF6B00] text-sm font-black tracking-[0.3em] uppercase">
          Únete a la Familia
        </span>

        <h2
          className="text-5xl md:text-8xl font-black uppercase text-white mt-3 mb-6"
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            background: 'linear-gradient(135deg, #FFD700 0%, #FF6B00 50%, #E31837 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(255,107,0,0.4))',
          }}
        >
          ¡ATRÉVETE!
        </h2>

        <p className="text-[#FFB347] text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Regístrate y sé el primero en conocer nuevos sabores, promociones exclusivas y
          experiencias únicas Doritos.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full text-white text-lg font-bold outline-none focus:ring-2 focus:ring-[#FF6B00] placeholder-gray-500"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,107,0,0.3)',
              }}
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full text-white text-lg font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:brightness-110 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #E31837, #FF6B00)',
                boxShadow: '0 0 30px rgba(255,107,0,0.5)',
              }}
            >
              ¡Únete!
            </button>
          </form>
        ) : (
          <div
            className="p-8 rounded-2xl max-w-lg mx-auto"
            style={{ background: 'rgba(255,107,0,0.1)', border: '2px solid #FF6B00' }}
          >
            <div className="text-5xl mb-3">🎉</div>
            <p
              className="text-[#FFD700] text-2xl font-black uppercase"
              style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              ¡Bienvenido a la Familia!
            </p>
            <p className="text-gray-400 mt-2">Pronto recibirás noticias explosivas en tu correo.</p>
          </div>
        )}

        {/* Social proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <span className="font-bold">+500K seguidores</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <span className="font-bold">4.9/5 valoración</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏪</span>
            <span className="font-bold">En toda México</span>
          </div>
        </div>
      </div>
    </section>
  )
}
