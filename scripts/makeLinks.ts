import { getGrimoireSpell } from 'grimoire-wow'
import fs from 'fs'
import path from 'path'
import { getDirname } from './files.ts'
import { capitalize } from '../src/util/string.ts'

const playerSpellIds = [
  344359, 388023, 442818, 388779, 100784, 443028, 123986, 423439, 325197, 450529, 117952, 446260,
  438439, 432181, 122783, 124682, 115203, 388811, 191894, 450870, 122280, 443294, 388874, 467316,
  388193, 467293, 443059, 116849, 449582, 197900, 451024, 440008, 173841, 450432, 450867, 388847,
  115151, 115310, 274909, 107428, 388491, 400089, 399491, 115175, 101546, 443110, 116645, 100780,
  116680, 388551, 400053, 388812, 116670, 157411, 414131, 446326, 116844, 101643, 388615, 450448,
  388681, 357768, 119381, 58984, 20594, 31224, 446345, 322101, 389577, 118, 132469, 116841, 1044,
  115546, 109132, 422031, 388031, 406220, 388212, 115098, 388661, 404408, 450508, 322109, 196725,
  197895, 388509, 467307, 1239442, 328670, 1268807, 1277302, 388682, 1280297, 1243155, 1260677,
]

const dungeonSpellIds = [217200]

const spellIds = [...playerSpellIds, ...dungeonSpellIds]

const spells = spellIds.map(getGrimoireSpell).sort((a, b) => a.name.localeCompare(b.name))

const simpleName = (name: string) =>
  name
    .split(' ')
    .map(capitalize)
    .join()
    .split(/[\s-,']/)
    .join('')

const output = `// THIS FILE IS AUTO-GENERATED
import { makeSpell } from './makeWL.tsx'

${spells.map((spell) => `export const ${simpleName(spell.name)} = makeSpell("${spell.name}", ${spell.id}, '${spell.icon}')`).join('\n')}

export const ChiJi = makeSpell('Chi-Ji', 325197, 'inv_pet_cranegod')
export const ChiJiGustOfMists = makeSpell('Chi-Ji Gust of Mists', 343819, 'monk_stance_redcrane')
`

const dirname = getDirname(import.meta.url)
fs.writeFileSync(path.join(dirname, '../src/components/Common/WowheadLink/Spells.tsx'), output)
