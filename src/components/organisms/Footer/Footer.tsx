import { Link } from '@tanstack/react-router'
import { FaCode, FaInstagram, FaJava, FaLinkedin, FaPython } from "react-icons/fa";
import { WhaleLogo } from '@/components/atoms/WhaleLogo'

// Organism: footer 4 kolom, senada dengan tema laut.
export function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <span className="flex items-center gap-2 text-lg font-bold text-foam">
            <WhaleLogo className="h-9 w-auto" />
            paiss<span className="text-surf">Paus</span>.
          </span>
          <p className="text-sm text-mist">
            Catatan & materi belajar coding. Just keep swimming.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">Popular Journey</h3>
          <div className='flex flex-row gap-1 items-center'><FaCode/>
          <p className="text-mist">Basic Programming</p></div>
          <div className='flex flex-row gap-1 items-center'><FaJava/>
          <p className="text-mist">Java</p></div>
          <div className='flex flex-row gap-1 items-center'><FaPython/>
          <p className="text-mist">Python</p></div>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">Social Media</h3>


          <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaInstagram className="w-6 h-6 text-mist" />
            <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/faizivntm_/">@faizivntm_</a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="w-6 h-6 text-mist" />
            <a target='_blank' rel='noopener noreferrer' href="https://id.linkedin.com/in/faizivantama">Faiz Ivan Tama</a>
          </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-foam">paissPaus</h3>
          <Link to="/about" className="block text-mist hover:text-surf">
            About
          </Link>
          <Link to="/materials" className="block text-mist hover:text-surf">
            Materi
          </Link>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} paissPaus — dibuat oleh Faiz Ivan Tama.
      </div>
    </footer>
  )
}
