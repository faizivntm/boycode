import { createFileRoute, Link } from '@tanstack/react-router'
import { FaJava, FaPython, FaReact, FaJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'
import { Button } from '@/components/atoms/Button'
import { WhaleLogo } from '@/components/atoms/WhaleLogo'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { MaterialCard } from '@/components/molecules/MaterialCard'
import { categories, sortedMaterials } from '@/content/materials'

export const Route = createFileRoute('/')({
  component: Index,
})

// Gelembung tech stack yang "disembur" paus. pos: posisi absolut, delay: stagger animasi.
const stack = [
  { Icon: FaJava, color: '#e76f00', label: 'Java', pos: 'left-[8%] top-[46%]', size: 'h-11 w-11', delay: '0s' },
  { Icon: FaPython, color: '#3776ab', label: 'Python', pos: 'left-[30%] top-[8%]', size: 'h-14 w-14', delay: '.6s' },
  { Icon: SiTypescript, color: '#3178c6', label: 'TypeScript', pos: 'left-[58%] top-[2%]', size: 'h-12 w-12', delay: '1.2s' },
  { Icon: FaJs, color: '#f7df1e', label: 'JavaScript', pos: 'right-[6%] top-[24%]', size: 'h-12 w-12', delay: '.3s' },
  { Icon: FaReact, color: '#61dafb', label: 'React', pos: 'left-[46%] top-[30%]', size: 'h-10 w-10', delay: '1.5s' },
  { Icon: SiTailwindcss, color: '#38bdf8', label: 'Tailwind', pos: 'right-[20%] top-[50%]', size: 'h-10 w-10', delay: '.9s' },
]

function Index() {
  const latest = sortedMaterials().slice(0, 4)
  const topics = categories()

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {/* Hero */}
      <section className="grid items-center gap-10 py-20 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            paiss<span className="text-surf">Paus</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist">
            Mungkin coding tak lagi butuh kamu karena AI menggantikan
            pekerjaanmu. Tapi kalau AI gagal, dunia tetap butuh programmer
            seperti kamu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/materials">
              <Button className="min-w-40">Start Swimming</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Take a breath</Button>
            </Link>
          </div>
        </div>

        {/* Art: paus menyembur tech stack */}
        <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
          {stack.map((t) => (
            <div
              key={t.label}
              title={t.label}
              style={{ animationDelay: t.delay }}
              className={`animate-bob absolute ${t.pos} ${t.size} grid place-items-center rounded-full border border-line bg-tide/80 shadow-lg backdrop-blur`}
            >
              <t.Icon className="h-1/2 w-1/2" style={{ color: t.color }} />
            </div>
          ))}
          <WhaleLogo className="absolute bottom-0 left-1/2 h-44 w-auto -translate-x-1/2 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
        </div>
      </section>

      {/* Explore: kategori */}
      <section className="py-10">
        <SectionHeading
          title="Where do you want to go?"
          subtitle="Just keep swimming, and you'll find your place."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <Link
              key={t.name}
              to="/materials"
              className="rounded-xl border border-line bg-tide/60 p-6 transition-colors hover:border-surf/50 hover:bg-tide"
            >
              <div className='flex flex-row justify-center items-center gap-3'>
              {t.name == "Java" && <FaJava className='h-10 w-10'/>}
              <div>
              <h3 className="font-semibold text-foam">{t.name}</h3>
              <p className="mt-1 text-sm text-mist">{t.total} materi</p>
              </div>
              </div>
            
            </Link>
          ))}
        </div>
      </section>

      {/* Latest: materi terbaru */}
      <section className="py-10 pb-20">
        <SectionHeading
          title="Fresh from the surface"
          subtitle="Materi & catatan terbaru dari kedalaman laut."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((m) => (
            <MaterialCard key={m.slug} material={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
