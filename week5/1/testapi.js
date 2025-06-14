const API_BASE = '<https://jsonplaceholder.typicode.com>'

// GET - Obține date
async function getPosts() {
  const response = await fetch(`${API_BASE}/posts`)
  return await response.json()
}

// POST - Creează date
async function createPost(title, body, userId) {
  const response = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, userId }),
  })
  return await response.json()
}

// PUT - Actualizează complet
async function updatePost(id, title, body, userId) {
  const response = await fetch(`${API_BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, title, body, userId }),
  })
  return await response.json()
}

// DELETE - Șterge
async function deletePost(id) {
  const response = await fetch(`${API_BASE}/posts/${id}`, {
    method: 'DELETE',
  })
  return response.ok
}


// Obține toate postările
getPosts().then(console.log)

// Creează o postare nouă
createPost("Titlu nou", "Conținut test", 1).then(console.log)

// Actualizează complet o postare
updatePost(1, "Titlu modificat", "Conținut actualizat", 1).then(console.log)

// Șterge o postare
deletePost(1).then(success => {
  if (success) {
    console.log("Postare ștearsă cu succes.")
  } else {
    console.log("Ștergerea a eșuat.")
  }
})
