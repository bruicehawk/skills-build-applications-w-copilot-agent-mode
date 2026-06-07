import PageSection from './PageSection.jsx'

function Workouts() {
  return (
    <PageSection
      title="Workouts"
      subtitle="Personalized workout suggestions for different fitness levels."
      endpoint="/api/workouts/"
      renderItem={(workout) => (
        <article className="data-card" key={workout._id ?? workout.title}>
          <h3>{workout.title}</h3>
          <p>{workout.focus} | {workout.difficulty}</p>
          <p>{workout.description}</p>
          <span className="metric">{workout.durationMinutes} min</span>
        </article>
      )}
    />
  )
}

export default Workouts
