const posts=[ 
  {title:'Post One',body:'This is post one'},
  {title:'Post Two',body:'This is post two'},
];

function getPosts(){
  setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
  },1000);
}
//va trebuii sa astepta pentru a crea html inainte de a apela callbackul
function createPost(post , callback){
  setTimeout(()=>{
    posts.push(post);
    callback();
  },2000);
}



createPost({title:'Post Three',body:'This is post three'},getPosts);