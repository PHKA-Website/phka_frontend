import * as globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  {
    files: [
      "./Sources/**/*.{js,cjs,mjs,ts,cts,mts}",
    ]
  }, {
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  },
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
]
