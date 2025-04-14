import { promises as fs } from 'node:fs'
import console from 'node:console'
import path from 'node:path'
import process from 'node:process'
import SVGFixer from 'oslllo-svg-fixer'

const inputDir = './icons-copied/'
const outputDir = './icons-outlined/'

export default async function outlineIcons() {
  await fs.mkdir(outputDir)
    .catch(() => {
      // do nothing.
    })
  try {
    await SVGFixer(
      path.resolve(process.cwd(), inputDir),
      path.resolve(process.cwd(), outputDir),
      {
        showProgressBar: true,
        traceResolution: 800,
      }
    ).fix();
  } catch (err) {
    console.log('- \x1b[31m%s\x1b[0m', `${ err }`)
  }
}

await outlineIcons()
