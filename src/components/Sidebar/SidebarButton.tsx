import { Button } from '../Common/Button.tsx'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface Props {
  onClick: () => void
}

export function SidebarButton({ onClick }: Props) {
  return (
    <Button
      twoDimensional
      Icon={Bars3Icon}
      iconSize={18}
      onClick={onClick}
      style={{
        height: 48,
        padding: `12px 4px 12px 8px`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    />
  )
}
