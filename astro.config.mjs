import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
export default defineConfig({ site: 'https://minimal.tools', output: 'static', integrations: [react()] })
