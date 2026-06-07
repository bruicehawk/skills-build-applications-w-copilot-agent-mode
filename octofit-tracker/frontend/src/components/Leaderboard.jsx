import PageSection from './PageSection.jsx'

function Leaderboard() {
  return (
    <PageSection
      title="Leaderboard"
      subtitle="Current student rankings for the monthly OctoFit challenge."
      endpoint="/api/leaderboard/"
      renderItem={(entry) => (
        <article className="data-card" key={entry._id ?? entry.rank}>
          <h3>#{entry.rank} {entry.name}</h3>
          <p>{entry.team}</p>
          <span className="metric">{entry.points} pts</span>
        </article>
      )}
    />
  )
}

export default Leaderboard
