import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendLoveNote } from './api/_telegram.js'

// `npm run dev` / `npm run preview` paytida ham /api/send ishlashi uchun
function telegramApi(env) {
  const handler = (req, res, next) => {
    if (!req.url?.startsWith('/api/send')) return next()
    if (req.method !== 'POST') {
      res.statusCode = 405
      return res.end()
    }
    let raw = ''
    req.on('data', (c) => (raw += c))
    req.on('end', async () => {
      let body = {}
      try { body = JSON.parse(raw || '{}') } catch {}
      const { status, body: out } = await sendLoveNote(body, env)
      res.statusCode = status
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify(out))
    })
  }
  return {
    name: 'telegram-api',
    configureServer(s) { s.middlewares.use(handler) },
    configurePreviewServer(s) { s.middlewares.use(handler) },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'TELEGRAM_')
  return {
    plugins: [react(), telegramApi(env)],
    base: './',
  }
})
