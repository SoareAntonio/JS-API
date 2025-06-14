/* Exercițiul 4: Implementează o funcție de căutare care: 
Primește un termen de căutare
Caută în titlurile post-urilor
Returnează rezultatele filtrate
Afișează "Nu s-au găsit rezultate" când este cazul*/

async function cautaPostari() {
      const termen = document.getElementById("searchInput").value.trim().toLowerCase();
      const mesajDiv = document.getElementById("mesaj");
      const rezultateDiv = document.getElementById("rezultate");

      mesajDiv.textContent = "";
      rezultateDiv.innerHTML = "";

      if (!termen) {
        mesajDiv.textContent = "Te rog introdu un termen de căutare.";
        return;
      }

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postari = await response.json();

        const rezultate = postari.filter(post => post.title.toLowerCase().includes(termen));

        if (rezultate.length === 0) {
          mesajDiv.textContent = "Nu s-au găsit rezultate.";
          return;
        }

        rezultate.forEach(post => {
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