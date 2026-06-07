import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from './api.js'

function PageSection({ title, subtitle, endpoint, renderItem }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetchCollection(endpoint)
      .then((data) => {
        if (active) setItems(data)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [endpoint])

  return (
    <section>
      <header className="page-header">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <span className="status-note">{apiBaseUrl}</span>
      </header>
      {loading && <p>Loading OctoFit data...</p>}
      {error && <p className="alert alert-warning">{error}</p>}
      {!loading && !error && (
        <div className="data-grid">
          {items.map((item) => renderItem(item))}
        </div>
      )}
    </section>
  )
}

export default PageSection
