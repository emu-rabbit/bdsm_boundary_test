import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'

const distDirectory = resolve('dist')
const argumentsList = process.argv.slice(2)

function argumentValue(name, fallback) {
  const index = argumentsList.indexOf(name)
  return index >= 0 && argumentsList[index + 1] ? argumentsList[index + 1] : fallback
}

const host = argumentValue('--host', process.env.HOST || '127.0.0.1')
const port = Number(argumentValue('--port', process.env.PORT || '4173'))

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
}

function resolvePublicFile(pathname) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '')
  const candidates = []

  if (cleanPath) {
    candidates.push(resolve(distDirectory, cleanPath))

    if (!extname(cleanPath)) {
      candidates.unshift(resolve(distDirectory, `${cleanPath}.html`))
      candidates.push(resolve(distDirectory, cleanPath, 'index.html'))
    }
  }

  candidates.push(resolve(distDirectory, 'index.html'))

  return candidates.find((candidate) => {
    const insideDist = candidate === distDirectory || candidate.startsWith(`${distDirectory}${sep}`)
    return insideDist && existsSync(candidate) && statSync(candidate).isFile()
  })
}

const server = createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end()
    return
  }

  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || host}`)

  if (requestUrl.pathname === '/') {
    response.writeHead(302, { Location: `/en${requestUrl.search}` })
    response.end()
    return
  }

  let filePath

  try {
    filePath = resolvePublicFile(requestUrl.pathname)
  } catch {
    response.writeHead(400)
    response.end('Bad request')
    return
  }

  if (!filePath) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  const contentType = contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream'
  response.writeHead(200, {
    'Cache-Control': 'no-store',
    'Content-Type': contentType,
  })

  if (request.method === 'HEAD') {
    response.end()
    return
  }

  createReadStream(filePath).pipe(response)
})

server.listen(port, host, () => {
  console.log(`Firebase-style preview available at http://${host}:${port}`)
})
