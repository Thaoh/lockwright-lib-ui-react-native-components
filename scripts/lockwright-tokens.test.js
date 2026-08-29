import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

test('dark tokens are hatch-plate brass, not PearPass lime', () => {
  const tokens = JSON.parse(
    readFileSync(join(root, 'src/theme/tokens.json'), 'utf8')
  )
  const dark = tokens.colors.dark
  assert.equal(dark.colorPrimary, '#b08d57')
  assert.equal(dark.colorBackground, '#08090b')
  assert.equal(dark.colorLinkText, '#d4af77')
  assert.notEqual(dark.colorPrimary.toLowerCase(), '#b0d944')
})

test('generated dark theme matches tokens.json', () => {
  const tokens = JSON.parse(
    readFileSync(join(root, 'src/theme/tokens.json'), 'utf8')
  )
  const darkTs = readFileSync(join(root, 'src/theme/themes/dark.ts'), 'utf8')
  assert.match(
    darkTs,
    new RegExp(`colorPrimary: '${tokens.colors.dark.colorPrimary}'`)
  )
  assert.doesNotMatch(darkTs, /#B0D944/i)
})

test('PearpassLogo asset is the hatch plate', () => {
  const svg = readFileSync(
    join(root, 'src/icons/assets/PearpassLogo.svg'),
    'utf8'
  )
  assert.match(svg, /rx="2"/)
  assert.doesNotMatch(svg, /M13\.2268 14\.0391/)
})
