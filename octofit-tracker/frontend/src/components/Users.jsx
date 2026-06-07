import PageSection from './PageSection.jsx'

function Users() {
  return (
    <PageSection
      title="Users"
      subtitle="Student profiles and team point totals."
      endpoint="/api/users/"
      renderItem={(user) => (
        <article className="data-card" key={user._id ?? user.email}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>Grade {user.grade} | {user.team}</p>
          <span className="metric">{user.totalPoints} pts</span>
        </article>
      )}
    />
  )
}

export default Users
