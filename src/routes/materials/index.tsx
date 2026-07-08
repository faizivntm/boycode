import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/molecules/SectionHeading'
import { MaterialCard } from '@/components/molecules/MaterialCard'
import { sortedMaterials } from '@/content/materials'

export const Route = createFileRoute('/materials/')({
  component: Materials,
})

function Materials() {
  const all = sortedMaterials()
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter((m) =>
      [m.title, m.summary, m.category, ...(m.tags ?? [])]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [all, query])

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        title="Semua Materi"
        subtitle="Kumpulan catatan & pembelajaran untuk semua."
      />

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari judul, kategori, atau tag…"
        className="mt-8 w-full max-w-md rounded-xl border border-line bg-tide/60 px-4 py-2.5 text-foam placeholder:text-mist outline-none transition-colors focus:border-surf/50"
      />

      {items.length === 0 ? (
        <p className="mt-10 text-mist">
          {all.length === 0
            ? 'Belum ada materi. Tambahkan di src/content/materials.ts.'
            : `Tidak ada materi yang cocok dengan "${query}".`}
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => (
            <MaterialCard key={m.slug} material={m} />
          ))}
        </div>
      )}
    </div>
  )
}
