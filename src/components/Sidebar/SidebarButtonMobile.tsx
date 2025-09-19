import { Button } from '../Common/Button.tsx'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface Props {
  onClick: () => void
}

export function SidebarButtonMobile({ onClick }: Props) {
  return (
    <Button
      twoDimensional
      Icon={Bars3Icon}
      iconSize={18}
      onClick={onClick}
      style={{
        height: 32,
        width: 26,
        padding: `12px 0px 12px 0px`,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
    />
  )
}
