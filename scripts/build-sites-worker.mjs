import { mkdir, writeFile } from 'node:fs/promises'

const workerDirectory = new URL('../dist/server/', import.meta.url)
const workerFile = new URL('index.js', workerDirectory)

const workerSource = `const htmlAcceptHeader = 'text/html'

export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request)

    if (
      assetResponse.status !== 404 ||
      request.method !== 'GET' ||
      !request.headers.get('accept')?.includes(htmlAcceptHeader)
    ) {
      return assetResponse
    }

    const indexUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  },
}
`

await mkdir(workerDirectory, { recursive: true })
await writeFile(workerFile, workerSource, 'utf8')
