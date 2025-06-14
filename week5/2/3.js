/* Exercițiul 3: Creează o aplicație simplă care: 
Are un input pentru ID-ul utilizatorului
Un buton pentru "Obține Posts"
Afișează toate post-urile utilizatorului respectiv
Gestionează cazul când utilizatorul nu există*/
async function obtinePosturi() {
      const userId = document.getElementById("userIdInput").value;
      const mesajDiv = document.getElementById("mesaj");
      const rezultateDiv = document.getElementById("rezultate");

      mesajDiv.textContent = "";
      rezultateDiv.innerHTML = "";

      if (!userId) {
        mesajDiv.textContent = "Te rog introdu un ID valid.";
        return;
      }

      try {
        // Verificăm dacă utilizatorul există
        const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResp.ok) {
          mesajDiv.textContent = `Utilizatorul cu ID-ul ${userId} nu există.`;
          return;
        }

        const postsResp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResp.json();

        if (posts.length === 0) {
          mesajDiv.textContent = "Acest utilizator nu are postări.";
          return;
        }

        posts.forEach(post => {
          const postDiv = document.createElement("div");
          postDiv.className = "post";
          postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
          rezultateDiv.appendChild(postDiv);
        });

      } catch (error) {
        mesajDiv.textContent = "Eroare la obținerea datelor.";
        console.error(error);
      }
    }