import PageSection from './PageSection.jsx'

function Activities() {
  return (
    <PageSection
      title="Activities"
      subtitle="Recent logged movement across cardio and strength sessions."
      endpoint="/api/activities/"
      renderItem={(activity) => (
        <article className="data-card" key={activity._id ?? `${activity.userName}-${activity.type}`}>
          <h3>{activity.type}</h3>
          <p>{activity.userName}</p>
          <p>{activity.durationMinutes} minutes {activity.distanceMiles ? `| ${activity.distanceMiles} miles` : ''}</p>
          <span className="metric">{activity.points} pts</span>
        </article>
      )}
    />
  )
}

export default Activities
