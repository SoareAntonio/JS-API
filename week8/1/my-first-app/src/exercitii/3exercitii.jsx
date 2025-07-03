// ContactCard.jsx
export function ContactCard({ name, email, phone, avatar }) {
  return (
    <div className="contact-card">
      <img src={avatar} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export function ContactList ({contacts}){
  return (
    <div>
      <h2>Lista de contacte</h2>
      <div className="contact-list">
        {contacts.map((contact,index) =>(
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            avatar={contact.avatar}
          />
        ))}
      </div>
    </div>
  )
}

export function StatusBadge({ status }) {
  let color, text, icon;

  switch (status) {
    case 'active':
      color = 'green';
      text = 'Activ';
      icon = '✅';
      break;
    case 'inactive':
      color = 'gray';
      text = 'Inactiv';
      icon = '⛔';
      break;
    case 'pending':
      color = 'orange';
      text = 'În așteptare';
      icon = '⏳';
      break;
    default:
      color = 'black';
      text = 'Necunoscut';
      icon = '❓';
  }

  return (
    <span
      className="status-badge"
      style={{
        backgroundColor: color,
        padding: '5px 10px',
        borderRadius: '12px',
        color: 'white',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      <span>{icon}</span>
      {text}
    </span>
  );
}
/* Cum pasez multe props cu ușurință?
Răspuns: Folosește spread operator:
const user = { name: "Ana", age: 25, email: "ana@example.com" };

// În loc de:
<UserProfile name={user.name} age={user.age} email={user.email} />

// Poți face:
<UserProfile {...user} />*/