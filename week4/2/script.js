//get an article by its ID

function getArticleByID(id){
  fetch('https://jsonplaceholder.typicode.com/posts/${id}').then(function(response){
    //if the response is successful get the Json data
    if(response.ok){
      return response.json();
    }

    //otherwise throw an error
    throw 'Something went wrong';
  }).then(function(data){
    console.log(data);
  }).catch(function(error){
    console.warn(error);
  });
}

async function getArticleByID(id) {
  let response=await fetch('https://jsonplaceholder.typicode.com/posts/${id}');
  if(! response.ok){
    throw 'Something went wrong';
  }

  let data = await response.json();

  console.log(data);
  
}

async function getArticleByID(id) {
  try{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/${id}');
      if(! response.ok){
        throw 'Something went wrong';
      }

      let data = await response.json();

      console.log(data);
  } catch(error){
    console.warn(error);
  } finally {
    console.log('This always run');
  }
  
  
}