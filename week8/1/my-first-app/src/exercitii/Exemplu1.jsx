export function UserProfile() {
  return (
    <div className="user-profile">
      <img src="./images/my.jpg" alt="User" style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}/>
      <h2>Soare Antonio</h2>
      <p>Software Developer</p>
      <button>Follow</button>
    </div>
  )
}

export function UserCard2({ name, title, age, avatar, isActive }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <span>Age: {age}</span>
      {isActive && <span className="badge">Active</span>}
    </div>
  )
}

export function UserCard(props) {
  // presupun o implementare simplă a UserCard
  return (
    <div className="user-card">
      <h3>{props.name}</h3>
      <p>{props.title}</p>
    </div>
  )
}

export function Button({ text = 'Click me', onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
