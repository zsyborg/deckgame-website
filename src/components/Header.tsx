'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTelegram, FaXTwitter } from 'react-icons/fa6'
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
          className="md:hidden text-gold relative z-50 flex items-center justify-center w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {/* Animated hamburger: 3 bars that morph into an X */}
          <span className={`block absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'}`} />
          <span className={`block absolute w-6 h-0.5 bg-current transform transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`} />
        </button>

        <div className={`absolute md:relative top-full left-0 right-0 md:top-auto bghead border-b border-t border-amber-600 md:flex gap-8 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0 md:max-h-full'}`}>
          <Link href="#features" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Features</Link>
          <Link href="#classes" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Classes</Link>
          {/* <Link href="#monsters" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Monsters</Link> */}
          <Link href="#gameplay" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Gameplay</Link>
          <Link href="#roadmap" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0">Roadmap</Link>
            <Link href="https://t.me/shodensol" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0"><FaTelegram /></Link>
            <Link href="https://x.com/shodensol" className="block md:inline text-gray-300 hover:text-gold transition px-6 py-2 md:px-0 md:py-0"><FaXTwitter /></Link>

        </div>

        {/* <Link href="/play" className="hidden md:block px-6 py-2 bg-gradient-accent rounded-lg text-white font-bold hover:shadow-lg hover:shadow-accent/50 transition">
          Play Now
        </Link> */}
      </nav>
    </header>
  )
}
