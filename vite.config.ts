import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigpaths from 'vite-tsconfig-paths'
// import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths()],
	// resolve:{
	// 	alias: {
	// 		'@': resolve(__dirname, './src')
	// 	}
	// }
})
