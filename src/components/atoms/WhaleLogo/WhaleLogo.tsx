import orca from '@/assets/orca.png'

// Atom: logo orca paissPaus (di-crop dari ilustrasi referensi).
// Kontrol ukuran lewat className pakai tinggi + w-auto biar rasio terjaga,
// mis. "h-9 w-auto".
export function WhaleLogo({ className }: { className?: string }) {
  return (
    <img src={orca} alt="" aria-hidden="true" draggable={false} className={className} />
  )
}
