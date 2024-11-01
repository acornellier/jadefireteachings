import { getGrimoireSpell } from 'grimoire-wow'
import fs from 'fs'
import path from 'path'
import { getDirname } from './files.ts'
import { capitalize } from '../src/util/string.ts'

const spellIds = [
  344359, 388023, 442818, 388779, 100784, 443028, 123986, 423458, 325197, 450529, 117952, 446260,
  438439, 432181, 122783, 124682, 115203, 388811, 191894, 450870, 122280, 443294, 388874, 467316,
  388193, 467293, 443059, 116849, 449582, 197900, 451024, 440008, 173841, 450432, 450867, 388847,
  115151, 115310, 274909, 107428, 388491, 400089, 399491, 115175, 101546, 443110, 116645, 100780,
  116680, 388551, 400053, 388812, 116670, 157411, 414131, 446326, 116844, 438473, 438476, 461487,
  101643, 388615, 450448,
]

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

export const ChiJi = InvokeChiJiTheRedCrane
`

const dirname = getDirname(import.meta.url)
fs.writeFileSync(path.join(dirname, '../src/components/Common/WowheadLink/Spells.tsx'), output)
