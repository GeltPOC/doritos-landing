'use client'
import { useState } from 'react'

type Flavor = {
  id: number
  name: string
  tagline: string
  description: string
  emoji: string
  color: string
  badge: string
  intensity: number
}

const FLAVORS: Flavor[] = [
  {
    id: 1,
    name: 'Nacho Cheese',
    tagline: 'El Clásico Irresistible',
    description:
      'La combinación perfecta de maíz crujiente con intenso queso nacho. El original que lo inició todo.',
    emoji: '🧀',
    color: 'from-yellow-500 to-orange-500',
    badge: 'CLÁSICO',
    intensity: 3,
  },
  {
    id: 2,
    name: "Flamin' Hot",
    tagline: 'Para los más valientes',
    description:
      'Picante extremo que te quemará de la mejor manera. Solo para quienes se atrevan al desafío definitivo.',
    emoji: '🌶️',
    color: 'from-red-600 to-red-900',
    badge: '🔥 EXTREMO',
    intensity: 5,
  },
  {
    id: 3,
    name: 'Cool Ranch',
    tagline: 'Refrescante y Adictivo',
    description:
      'La frescura del ranch con el crunch de Doritos. Un equilibrio perfecto entre sabor y frescura.',
    emoji: '🌿',
    color: 'from-blue-500 to-cyan-600',
    badge: 'FAVORITO',
    intensity: 2,
  },
  {
    id: 4,
    name: 'Dinamita',
    tagline: 'Explosión Garantizada',
    description:
      'Enrollado y explosivo. El chile limón más intenso en la forma más atrevida de Doritos.',
    emoji: '💥',
    color: 'from-orange-500 to-red-600',
    badge: 'NUEVO',
    intensity: 4,
  },
  {
    id: 5,
    name: 'Taco',
    tagline: 'Sabor de la Calle',
    description:
      'Todo el sabor de un taco auténtico en cada chip. Especias mexicanas en su máxima expresión.',
    emoji: '🌮',
    color: 'from-amber-500 to-yellow-600',
    badge: 'ESPECIAL',
    intensity: 3,
  },
  {
    id: 6,
    name: 'Spicy Nacho',
    tagline: 'Lo Mejor de Dos Mundos',
    description:
      'El clásico nacho elevado con un toque picante que no podrás resistir. Perfección en cada mordida.',
    emoji: '⚡',
    color: 'from-orange-400 to-red-500',
    badge: 'TOP',
    intensity: 4,
  },
]

export default function FlavorsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="sabores" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A00] via-[#2D0800] to-[#1A0A00]" />

      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full"
            style={{ top: `${i * 10 + 5}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] text-sm font-black tracking-[0.3em] uppercase">
            Nuestros Productos
          </span>
          <h2
            className="text-6xl md:text-8xl font-black uppercase text-white mt-2 mb-4"
            style={{
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 0 #E31837',
            }}
          >
            SABORES
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#E31837] rounded" />
            <span className="text-[#FF6B00] text-2xl">🔺</span>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#E31837] rounded" />
          </div>
          <p className="text-[#FFB347] mt-4 text-lg max-w-xl mx-auto">
            Cada sabor es una aventura. ¿Cuál te atreves a probar?
          </p>
        </div>

        {/* Flavors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHovered(flavor.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                boxShadow:
                  hovered === flavor.id
                    ? '0 20px 60px rgba(255, 107, 0, 0.3)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Card gradient top */}
              <div className={`h-2 w-full bg-gradient-to-r ${flavor.color}`} />

              <div className="p-6">
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${flavor.color} text-white`}
                  >
                    {flavor.badge}
                  </span>
                  <span
                    className="text-4xl"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.6))' }}
                  >
                    {flavor.emoji}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-2xl font-black uppercase text-white mb-1"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  {flavor.name}
                </h3>
                <p
                  className={`text-sm font-bold bg-gradient-to-r ${flavor.color} bg-clip-text text-transparent mb-3`}
                >
                  {flavor.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{flavor.description}</p>

                {/* Intensity */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">
                      Intensidad
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className="h-2 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background:
                            level <= flavor.intensity
                              ? `linear-gradient(90deg, #E31837, #FF6B00)`
                              : 'rgba(255,255,255,0.1)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, rgba(255,107,0,0.05) 0%, transparent 70%)`,
                  opacity: hovered === flavor.id ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
