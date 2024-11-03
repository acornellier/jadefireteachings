import { getGrimoireSpell } from 'grimoire-wow'
import fs from 'fs'
import path from 'path'
import { getDirname } from './files.ts'
import { capitalize } from '../src/util/string.ts'

const playerSpellIds = [
  344359, 388023, 442818, 388779, 100784, 443028, 123986, 423458, 325197, 450529, 117952, 446260,
  438439, 432181, 122783, 124682, 115203, 388811, 191894, 450870, 122280, 443294, 388874, 467316,
  388193, 467293, 443059, 116849, 449582, 197900, 451024, 440008, 173841, 450432, 450867, 388847,
  115151, 115310, 274909, 107428, 388491, 400089, 399491, 115175, 101546, 443110, 116645, 100780,
  116680, 388551, 400053, 388812, 116670, 157411, 414131, 446326, 116844, 101643, 388615, 450448,
  388681, 357768, 119381, 58984, 20594, 31224,
]

const dungeonSpellIds = [
  434829, 448561, 434722, 440107, 440468, 440218, 438473, 438476, 461487, 439692, 439522, 443150,
  437533, 461880, 439341, 437700, 438860, 439646, 453212, 426787, 426860, 427001, 452127, 448882,
  447261, 457664, 449536, 456751, 450095, 449474, 448057, 450079, 450100, 323057, 328756, 323149,
  322450, 320596, 321247, 333633, 343555, 321754, 320788, 463182, 257882, 269266, 274991, 428508,
  428819, 427329, 427854, 424889, 432117,
]

const itemIds = [
  219314, 213746, 215133, 226024, 222873, 215134, 133304, 219506, 219312, 220202, 178708,
]

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

export const ChiJi = InvokeChiJiTheRedCrane
`

const dirname = getDirname(import.meta.url)
fs.writeFileSync(path.join(dirname, '../src/components/Common/WowheadLink/Spells.tsx'), output)
