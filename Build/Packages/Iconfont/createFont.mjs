import { promises as fs } from 'node:fs'
import console from 'node:console'
import path from 'node:path'
import process from 'node:process'
import svgtofont from 'svgtofont'

const inputDir = './icons-outlined/'
const outputDir = './icons-font/'
const stylesDir = './styles/'

const fontName = 'lucide'
const classNamePrefix = 'icon'
const startUnicode = 57400

/**
 * Creates icon font based on inputDir
 */
export default async function createFont() {
  await fs.mkdir(outputDir)
    .catch(() => {
      // do nothing.
    })
  try {
    await svgtofont({
      src: path.resolve(process.cwd(), inputDir),
      dist: path.resolve(process.cwd(), outputDir),
      styleTemplates: path.resolve(process.cwd(), stylesDir),
      fontName,
      classNamePrefix,
      startUnicode,
      css: {
        fontSize: 'inherit',
      },
      emptyDist: true,
      useCSSVars: false,
      outSVGReact: false,
      outSVGPath: false,
      svgicons2svgfont: {
        fontHeight: 1000, // At least 1000 is recommended
        normalize: false,
      },
      generateInfoData: false,
      website: null
    })
  } catch (err) {
    console.log('- \x1b[31m%s\x1b[0m', `${ err }`)
  }
}

await createFont()
