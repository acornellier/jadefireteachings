import type { ReactNode } from 'react'
import { capitalize } from '../../util/string.ts'
import { SubSection } from '../Guide/SubSection.tsx'

interface Props {
  title: string
  children?: ReactNode
  difficulty: 'easy' | 'medium' | 'hard' | 'EXTREME'
}

const difficultyColor = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400',
  EXTREME: 'text-pink-400',
}

export function BossSubSection({ title, children, difficulty }: Props) {
  return (
    <SubSection
      title={title}
      extras={
        <p className="font-bold">
          Difficulty: <span className={difficultyColor[difficulty]}>{capitalize(difficulty)}</span>
        </p>
      }
    >
      {children}
    </SubSection>
  )
}
