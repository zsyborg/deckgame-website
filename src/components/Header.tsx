'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-lime-950 navbar">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <img src='/navbar1.png' className='absolute w-44' /> */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">⚔️</span>
          </div>
          <span className="hidden md:block font-cinzel text-2xl font-bold bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
            Shoden
          </span>
        </Link>

        <button
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`absolute md:relative top-full left-0 right-0 md:top-auto bg-darker md:bg-transparent border-b md:border-0 border-gold/20 md:flex gap-8 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="#features" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Features</Link>
          <Link href="#classes" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Classes</Link>
          {/* <Link href="#monsters" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Monsters</Link> */}
          <Link href="#gameplay" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Gameplay</Link>
          <Link href="#roadmap" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Roadmap</Link>

        </div>

        {/* <Link href="/play" className="hidden md:block px-6 py-2 bg-gradient-accent rounded-lg text-white font-bold hover:shadow-lg hover:shadow-accent/50 transition">
          Play Now
        </Link> */}
      </nav>
    </header>
  )
}
