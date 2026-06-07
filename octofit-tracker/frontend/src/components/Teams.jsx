import PageSection from './PageSection.jsx'

function Teams() {
  return (
    <PageSection
      title="Teams"
      subtitle="Friendly competition groups for Mergington High students."
      endpoint="/api/teams/"
      renderItem={(team) => (
        <article className="data-card" key={team._id ?? team.name}>
          <h3>{team.name}</h3>
          <p>Mascot: {team.mascot}</p>
          <p>{team.memberCount} members</p>
          <span className="metric">{team.totalPoints} pts</span>
        </article>
      )}
    />
  )
}

export default Teams
