import { Link } from '@tanstack/react-router'
import type { Material } from '@/content/materials'
import { formatDate } from '@/lib/utils'

// Molecule: kartu ringkas satu materi. Dipakai di home & /materials.
// `admin` meneruskan konteks admin (?admin=1) ke halaman detail.
export function MaterialCard({
  material,
  admin = false,
}: {
  material: Material
  admin?: boolean
}) {
  return (
    <Link
      to="/materials/$slug"
      params={{ slug: material.slug }}
      search={admin ? { admin: true } : {}}
      className="group flex flex-col rounded-xl border border-line bg-tide/60 p-5 transition-colors hover:border-surf/50 hover:bg-tide"
    >
      <div className="flex items-center justify-between text-xs text-mist">
        <span className="rounded-full bg-surf/10 px-2.5 py-1 font-medium text-surf">
          {material.category}
        </span>
        <time dateTime={material.date}>{formatDate(material.date)}</time>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-foam group-hover:text-surf">
        {material.title}
      </h3>
      <p className="mt-1 line-clamp-3 text-sm text-mist">{material.summary}</p>

      <span className="mt-4 text-sm font-medium text-surf">Read →</span>
    </Link>
  )
}
