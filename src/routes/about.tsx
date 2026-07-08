import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <SectionHeading title="About paissPaus" subtitle="Filosofi di balik nama." />
      <div className="mt-8 space-y-5 leading-relaxed text-mist">
        <p>
          <span className="font-semibold text-foam">paissPaus</span> adalah
          gabungan dari dua hal yang berarti bagi saya.
        </p>
        <p>
          <span className="font-semibold text-foam">Pais</span> adalah nama saya.{' '}
          <span className="font-semibold text-foam">Paus</span> melambangkan
          kekuatan, ketenangan, dan kemampuan untuk terus berenang di lautan yang
          luas. Bagi saya, belajar juga seperti itu—bukan tentang siapa yang paling
          cepat, tetapi tentang siapa yang terus bergerak maju.
        </p>
        <p>
          Website ini adalah tempat saya mendokumentasikan perjalanan belajar,
          berbagi pengalaman, dan menulis hal-hal yang saya pelajari, terutama di
          dunia pemrograman dan teknologi. Semoga catatan yang saya bagikan bisa
          bermanfaat bagi siapa pun yang sedang menempuh perjalanan yang sama.
        </p>
        <p>
          Seperti paus yang terus berenang melintasi samudra, saya percaya bahwa
          proses belajar adalah perjalanan tanpa akhir.
        </p>
        <p className="font-semibold text-surf">Just keep swimming.</p>
      </div>
    </div>
  )
}
