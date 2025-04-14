import { promises as fs } from 'node:fs'
import console from 'node:console'
import icons from './icons.json' with { type: 'json' }
import path from 'node:path'
import process from 'node:process'

const inputDir = './node_modules/lucide-static/icons/'
const fileEnding = 'svg'
const outputDir = './icons-copied/'

/**
 * Copies icon files based on the icons.json
 * @public
 */
export default async function copyIcons() {
  /*eslint no-empty-function: ["error", { "allow": ["arrowFunctions"] }]*/
  await fs.mkdir(outputDir)
    .catch(() => {
      // do nothing.
    })
  icons.forEach(_copyIcon)
}

/**
 * Copies single icon file based on the name and global inputDir
 * @private
 * 
 * @param {string} icon Name of the icon file without file ending
 */
async function _copyIcon(icon) {
  try {
    await fs.cp(
      path.join(
        path.resolve(process.cwd(), inputDir),
        `${ icon }.${ fileEnding }`
      ),
      path.join(
        path.resolve(process.cwd(), outputDir),
        `${ icon }.${ fileEnding }`
      ),
      {
        force: true
      }
    )
  } catch {
    console.log('- \x1b[31m%s\x1b[0m', `File ${ icon }.${ fileEnding } not found.`)
  }
}

await copyIcons()
