/*  a) Evenimente de bază:

    - La click pe butonul "Apasă-mă", afișează un mesaj în elementul "clickResult"
    - La hover pe "hoverDemo", schimbă culoarea de fundal și revert-o când mouse-ul părăsește elementul */
const press=document.querySelector('#clickBtn');
const result=document.querySelector('#clickResult');
press.addEventListener('click',() =>{
  result.textContent="Butonul a fost apasat!";
});

const hover=document.querySelector('#hoverDemo');
hover.addEventListener('mouseenter',()=>{
  hover.style.backgroundColor="lightgreen";
});

hover.addEventListener('mouseleave',()=>{
  hover.style.backgroundColor="";
})

/* b) Validare formular:

    - La submit, verifică dacă numele utilizatorului are minim 3 caractere
    - Verifică dacă email-ul conține simbolul @ și un domeniu (.com, .ro, etc.)
    - Afișează mesaje de eroare corespunzătoare
    - Dacă totul este valid, afișează un mesaj de succes (și previne trimiterea formularului)*/

document.querySelector('#myForm').addEventListener('submit',function(event){
  const username=document.querySelector('#username').value ;
  const email=document.querySelector('#email').value;
  let isValid=true;

  document
      .querySelectorAll('.error')
      .forEach((el) => (el.textContent=''));

  if (!email.includes('@') || (!email.includes('.com') && !email.includes('.ro'))) {
  document.querySelector('#emailError').textContent = 'Email invalid';
  isValid = false;
  }

  if(username.length<=3){
    document.querySelector('#usernameError').textContent='Numele utilizatorului trebuie sa ai ba minim 3 caractere';
    isValid=false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Formular trimis cu succes!");
    event.preventDefault(); // doar dacă nu vrei să trimiți efectiv
  }
});

/*c) Listă de sarcini cu event delegation:
    
    - La click pe butonul "Adaugă", adaugă un nou element li cu textul din input
    - La click pe un element li, comută clasa "completed" (folosind event delegation)
    - La click pe "[x]", elimină elementul li părinte (folosind event delegation)
    -Creează un eveniment personalizat "taskCompleted" care se declanșează când un utilizator marchează o sarcină ca fiind completă și afișează un mesaj de felicitare.

    */

const input = document.querySelector('#newTask');
const addBtn = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

// Adaugă sarcină nouă
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.innerHTML = `${text} <span class="delete">[x]</span>`;
    taskList.appendChild(li);
    input.value = '';
  }
});

// Delegare de evenimente pe taskList
taskList.addEventListener('click', (e) => {
  const target = e.target;

  // Ștergere sarcină
  if (target.classList.contains('delete')) {
    target.parentElement.remove();
  }

  // Comută completarea
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');

    // Eveniment personalizat dacă sarcina e completată
    if (target.classList.contains('completed')) {
      const event = new CustomEvent('taskCompleted', {
        bubbles: true, // ✅ permite ascultătorului de pe taskList să reacționeze
        detail: { task: target.textContent.replace('[x]', '').trim() }
      });
      target.dispatchEvent(event);
    }
  }
});

// Afișare toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Ascultător pentru evenimentul personalizat
taskList.addEventListener('taskCompleted', (e) => {
  showToast(`🎉 Felicitări! Ai completat sarcina: "${e.detail.task}"`);
});



/*  d) Implementează funcționalitatea drag & drop pentru elementul "dragMe"
    
    - La mousedown, începe procesul de drag
    - La mousemove, updatează poziția elementului
    - La mouseup, oprește procesul de drag*/

const drag=document.querySelector('#dragMe');
let isDragging=false;
let offsetX=0;
let offsetY=0;
/*event.clientX = coordonata X (orizontală) a cursorului în momentul în care ai dat click (mousedown). Este relativă la viewport (adică la fereastra browserului).
dragMe.offsetLeft = distanța dintre marginea stângă a elementului părinte poziționat și marginea stângă a elementului dragMe*/
drag.addEventListener('mousedown',(e) =>{
  isDragging=true;
  offsetX=e.clientX - drag.offsetLeft;
  offsetY=e.clientY - drag.offsetTop;
  drag.style.cursor='grabbing';
});

document.addEventListener('mousemove',(e) =>{
  if(isDragging){
    drag.style.left=(e.clientX - offsetX)+'px';
    drag.style.top=(e.clientY - offsetY)+'px';
    //offsetX: distanța dintre marginea stângă a elementului și punctul în care ai făcut mousedown.
  }
});

document.addEventListener('mouseup',() =>{
  isDragging=false;
  drag.style.cursor='grab';
})

/* e) Implementează debounce pentru input-ul de căutare:
    - Afișează "Se caută..." în elementul searchStatus în timpul tastării
    - Folosește debounce pentru a afișa "Căutare finalizată pentru: [text]" după ce utilizatorul s-a oprit din tastat pentru 500ms*/
const input2=document.querySelector('#searchInput');
const status=document.querySelector('#searchStatus');

function debounce(fn,delay){
  let timeoutId;
  return function(...args){
    clearTimeout(timeoutId);//opreste orice timeout anterior
    timeoutId=setTimeout(()=>fn.apply(this,args),delay);
  };
}

function performSearch(){
  const query =input2.value.trim();
  if(query){
    status.textContent=`Cautare finalizata pentru: ${query}`;
  } else {
    status.textContent='';
  }
}

input2.addEventListener('input',()=>{
  status.textContent='Se cauta...';
  debouncedSearch();
});

const debouncedSearch=debounce(performSearch,500);