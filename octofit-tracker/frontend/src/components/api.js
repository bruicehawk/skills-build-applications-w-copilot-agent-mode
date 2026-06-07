const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const codespaceBaseUrl = codespaceName ? `https://${codespaceName}-8000.app.github.dev` : ''
const localBaseUrl = 'http://localhost:8000'

export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || codespaceBaseUrl || localBaseUrl

export async function fetchCollection(path) {
  const response = await fetch(`${apiBaseUrl}${path}`)

  if (!response.ok) {
    throw new Error(`Unable to load ${path}`)
  }

  const payload = await response.json()
  return Array.isArray(payload) ? payload : payload.results ?? payload.data ?? []
}
