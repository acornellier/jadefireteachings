import { useEffect, useState } from 'react'
import { Link } from './components/Common/Link.tsx'

interface SidebarLinkProps {
  label: string
  headingType: 'h2' | 'h3'
}

function SidebarLink({ label, headingType }: SidebarLinkProps) {
  if (headingType === 'h3') return
  return (
    <Link href={`#${label}`} className="text-teal-300">
      {label}
    </Link>
  )
}

export function Sidebar() {
  const [headers, setHeaders] = useState<SidebarLinkProps[]>([])

  useEffect(() => {
    const found: SidebarLinkProps[] = []
    for (const node of document.querySelectorAll('h2,h3')) {
      found.push({ label: node.innerHTML, headingType: node.tagName.toLowerCase() as 'h2' | 'h3' })
    }
    setHeaders(found)
  }, [])

  return (
    <div className="min-w-40 relative">
      <div className="flex flex-col gap-2 sticky top-8 text-lg">
        {headers.map(({ label, ...props }) => (
          <SidebarLink key={label} label={label} {...props} />
        ))}
      </div>
    </div>
  )
}
