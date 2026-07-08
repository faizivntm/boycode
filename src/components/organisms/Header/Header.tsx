import { Link } from '@tanstack/react-router'
import { NavLink } from '@/components/molecules/NavLink'
import { WhaleLogo } from '@/components/atoms/WhaleLogo'

// Organism: header sticky dengan blur di atas laut.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-deep/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-foam">
          <WhaleLogo className="h-9 w-auto" />{
          paiss<span className="text-surf">Paus</span>.

          }
        </Link>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/materials">Materi</NavLink>
          <NavLink to="/projects">Let's Try</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}
