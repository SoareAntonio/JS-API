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


//cerere get simpla catre JSONPlaceholder
async function getUsers() {
  try{
    const response=await fetch('<https://jsonplaceholder.typicode.com/users>')

    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const users=await response.json()
    console.log('Utilizatori:',users)
    return users
  } catch (error){
    console.error('Eroare la obtinerea utilizatorilor:',error)
  }
  
}
getUsers();


//cerere POST
async function createPost(title,body,userId) {
  try{
    const response = await fetch('<https://jsonplaceholder.typicode.com/posts>',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        title:title,
        body:body,
        userId:userId,
      }),
    })
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const newPost = await response.json()
    console.log('Post creat:', newPost)
    return newPost
  } catch (error){
    console.error('Eroare la crearea post-ului',error)
  }
  
}

createPost('Titlul meu','Continutul post-ului',1);


//cerere PUT
async function updatePost(postId,title,body,userId) {
  try{
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/${postId}',
      {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        id:postId,
        title:title,
        body:body,
        userId:userId,
      }),
    }
  )
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const updatePost = await response.json()
    console.log('Post actualizat:', updatePost)
    return updatePost
  } catch (error){
    console.error('Eroare la actualizarea post-ului',error)
  }
  
}

updatePost(1,'Titlu actualizat','Continut actualizat',1);

//cerere delete
async function deletePost(postId) {
  try{
    const response=await fetch(
      'https://jsonplaceholder.typicode.com/posts/${postId}',
      {
        method:'DELETE', 
      }
    )

    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    console.log(`Post cu ID-ul ${postId} a fost sters`)
    return true
  }catch (error){
    console.error('Eroare la stergerea post-ului',error)
    return false
  }
  


}

deletePost(1);