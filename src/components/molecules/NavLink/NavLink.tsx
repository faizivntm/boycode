import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

// Molecule: membungkus Link TanStack + styling state aktif.
// `[&.active]` memanfaatkan class "active" yang otomatis diberikan TanStack Router.
export function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        'text-slate-300 hover:text-cyan-400 [&.active]:font-semibold [&.active]:text-cyan-400',
        typeof className === 'string' ? className : undefined,
      )}
    />
  )
}
