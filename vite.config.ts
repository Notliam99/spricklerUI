import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [viteSingleFile({ removeViteModuleLoader: true, useRecommendedBuildConfig: false })],
  // build: {
  //   minify: true,
  // },
})
