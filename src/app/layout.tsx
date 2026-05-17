import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doritos — Atrévete al Sabor',
  description:
    'Descubre los sabores más atrevidos de Doritos. Crunch intenso, sabores explosivos. ¡Vive la experiencia Doritos!',
  keywords: ['Doritos', 'chips', 'snacks', 'sabores', 'nacho', 'picante'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
