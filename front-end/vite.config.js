import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dns from 'dns'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()]
// })

// Allows 'localhost' to be default address
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  // Makes localhost run on port 5000
  server: {
    port: 5000
  }
})