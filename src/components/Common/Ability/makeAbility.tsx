import { Ability } from './Ability.tsx'

export function makeAbility(name: string, id: number, icon: string) {
  const NewAbility = () => (
    <Ability id={id} icon={icon}>
      {name}
    </Ability>
  )
  NewAbility.displayName = name
  return NewAbility
}
