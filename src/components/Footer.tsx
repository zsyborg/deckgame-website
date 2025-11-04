import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-darker/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-gold mb-4">Deck Battle</h3>
            <p className="text-gray-400 text-sm">
              Experience the ultimate deck-building adventure in a realm of fantasy and strategy.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-4">Game</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {/* <li><Link href="/play" className="hover:text-gold transition">Play Now</Link></li> */}
              <li><a href="#features" className="hover:text-gold transition">Features</a></li>
              <li><a href="#classes" className="hover:text-gold transition">Characters</a></li>
              <li><a href="#monsters" className="hover:text-gold transition">Monsters</a></li>
              {/* <li><a href="#gameplay" className="hover:text-gold transition">How to Play</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition">Discord (Coming 2026)</a></li>
              <li><a href="https://t.me/shodensol" className="hover:text-gold transition">Twitter</a></li>
              <li><a href="https://x.com/shodensol" className="hover:text-gold transition">Telegram</a></li>
              {/* <li><a href="#" className="hover:text-gold transition">Reddit</a></li> */}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-bold text-gold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>

        {/* <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2025 Deck Battle</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition">GitHub</a>
            <a href="#" className="hover:text-gold transition">Support</a>
            <a href="#" className="hover:text-gold transition">Contact</a> 
          </div>
        </div> */}
      </div>
    </footer>
  )
}
