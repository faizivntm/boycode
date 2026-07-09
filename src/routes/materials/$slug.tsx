import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { ContentBlocks } from '@/components/organisms/ContentBlocks'
import { AdminTopbar } from '@/components/organisms/AdminTopbar'
import { useMaterials } from '@/api/materials/useMaterials'
import { formatDate } from '@/lib/utils'

export const Route = createFileRoute('/materials/$slug')({
  // ?admin=1 → dibuka dari sisi admin (header admin, tombol jadi "Back").
  validateSearch: (search: Record<string, unknown>): { admin?: boolean } =>
    search.admin === '1' || search.admin === true ? { admin: true } : {},
  component: MaterialDetail,
})

function MaterialDetail() {
  const { slug } = Route.useParams()
  const { admin } = Route.useSearch()
  const router = useRouter()
  const { data, isLoading, isError } = useMaterials()

  const material = data?.find((m) => m.slug === slug)

  // Tombol kembali: dari admin → "Back" (history), publik → link ke daftar materi.
  const back = admin ? (
    <button
      type="button"
      onClick={() => router.history.back()}
      className="text-sm text-surf hover:underline"
    >
      ← Back
    </button>
  ) : (
    <Link to="/materials" className="text-sm text-surf hover:underline">
      ← Semua materi
    </Link>
  )

  return (
    <>
      {admin && <AdminTopbar />}

      {isLoading ? (
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center text-mist">
          Memuat materi…
        </div>
      ) : isError || !material ? (
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
          <p className="text-mist">
            {isError ? 'Gagal memuat materi.' : 'Materi tidak ditemukan.'}
          </p>
          <div className="mt-4">{back}</div>
        </div>
      ) : (
        <article className="mx-auto w-full max-w-3xl px-6 py-16">
          {back}

          <header className="mt-6 border-b border-line pb-6">
            <div className="flex items-center gap-3 text-xs text-mist">
              <span className="rounded-full bg-surf/10 px-2.5 py-1 font-medium text-surf">
                {material.category}
              </span>
              <time dateTime={material.date}>{formatDate(material.date)}</time>
            </div>
            <h1 className="mt-4 break-words text-3xl font-bold tracking-tight text-foam">
              {material.title}
            </h1>
            <p className="mt-2 break-words text-lg text-mist">{material.summary}</p>
            {material.tags && material.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {material.tags.map((tag) => (
                  <span key={tag} className="text-xs text-mist">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="mt-8">
            <ContentBlocks blocks={material.body} />
          </div>
        </article>
      )}
    </>
  )
}
