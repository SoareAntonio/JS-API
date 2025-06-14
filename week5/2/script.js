//Fetch API
fetch('https://reqres.in/api/users' , {
  method: 'POST' ,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
  .then(res => {
    if(res.ok) {
      console.log('SUCCESS')
    } else {
      console.log("Not Successful")
    }
    
  })
    
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'));
  
/* Exercițiul 1: Creează o funcție care obține și afișează lista de utilizatori de la JSONPlaceholder. Afișează numele, email-ul și site-ul web pentru fiecare utilizator.*/
async function afiseazaUtilizatori() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const utilizatori = await response.json();

    console.log("Lista utilizatorilor:\n");
    utilizatori.forEach(user => {
      const { name, email, website } = user;
      console.log(`Nume: ${name}, Email: ${email}, Website: ${website}`);
    });

  } catch (error) {
    console.error("Eroare la cererea HTTP:", error);
  }
}

afiseazaUtilizatori();

/*Exercițiul 2: Implementează o funcție care creează un post nou și afișează confirmarea în consolă. Testează cu date diferite. */
async function creeazaPost(titlu, continut, userId) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const postNou = {
    title: titlu,
    body: continut,
    userId: userId
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postNou)
    });

    const data = await response.json();
    console.log("Post creat cu succes:");
    console.log(data);

  } catch (error) {
    console.error("Eroare la crearea postului:", error);
  }
}

// Testare cu date diferite
creeazaPost("Primul post", "Acesta este conținutul primului post.", 1);
creeazaPost("Alt titlu", "Alt conținut pentru testare.", 2);






//Aplicație de verificare vreme 

// Notă: Ai nevoie de o cheie API gratuită de la OpenWeatherMap
async function getWeather(city) {
  const apiKey = 'YOUR_API_KEY'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Orașul nu a fost găsit')
    }

    const weather = await response.json()

    console.log(`Vremea în ${city}:`)
    console.log(`Temperatura: ${weather.main.temp}°C`)
    console.log(`Descriere: ${weather.weather[0].description}`)
    console.log(`Umiditate: ${weather.main.humidity}%`)

    return weather
  } catch (error) {
    console.error('Eroare:', error.message)
  }
}

 //Aplicație de citate aleatorii

async function getRandomQuote() {
  try {
    const response = await fetch('<https://api.quotable.io/random>')
    const quote = await response.json()

    console.log(`"${quote.content}"`)
    console.log(`- ${quote.author}`)

    return quote
  } catch (error) {
    console.error('Nu s-a putut obține citatul:', error)
  }
}

// Obține un citat nou la fiecare 10 secunde
setInterval(getRandomQuote, 10000) 