import type { ReactNode } from 'react'
import { capitalize } from '../../util/string.ts'
import { SubSection } from '../Guide/SubSection.tsx'
import { Button } from '../Common/Button.tsx'
import { useCopy } from '../../util/hooks/useCopy.ts'

interface Props {
  title: string
  children?: ReactNode
  difficulty: 'easy' | 'medium' | 'hard' | 'EXTREME'
  mrt?: string
}

const difficultyColor = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400',
  EXTREME: 'text-pink-400',
}

export function BossSubSection({ title, children, difficulty, mrt }: Props) {
  const handleClick = useCopy('MRT note')

  return (
    <SubSection
      title={title}
      extras={
        <p className="font-bold">
          Difficulty: <span className={difficultyColor[difficulty]}>{capitalize(difficulty)}</span>
        </p>
      }
    >
      {mrt && (
        <div className="flex">
          <Button short outline onClick={() => handleClick(mrt)}>
            Copy MRT reminders to clipboard
          </Button>
        </div>
      )}
      {children}
    </SubSection>
  )
}
