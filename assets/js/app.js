// variables
const listaTweets = document.getElementById("lista-tweets");

//event listeners

eventListeners();

function eventListeners() {
  //cuando se envia el formulario
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
  //borrar un twett
  listaTweets.addEventListener("click", borrarTweet);

  // contenido cargado
  document.addEventListener("DOMContentLoaded", localStorageListo);
}

//funcions

function agregarTweet(e) {
  e.preventDefault();
  // leer el valor del textarea
  const tweet = document.getElementById("tweet").value;
  // creamos un boton eliminar en la lista de tweets
  const botonborrar = document.createElement("a");
  // le definimos una clase al boton creado
  botonborrar.classList = "borrar-tweet";
  botonborrar.textContent = "eliminar";

  // creamos un nuevo elemnto para añadir a la lista de twweets
  const li = document.createElement("li");
  li.innerText = tweet;
  // aqui se añade el boton borrar al tweet
  li.appendChild(botonborrar);
  // añade un tweet a la lista
  listaTweets.appendChild(li);

  // añadiendo el local storage  econtenido del tweet
  agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
  e.preventDefault();

  if (e.target.className === "borrar-tweet") {
    const aux = e.target.parentElement.textContent;
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.textContent);
    alert("eliminaste un tweet");
  }
}

//definicion de la funcion que agrega el tweet al local storage

function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  //AÑADIR EL NUEVO TWEET
  tweets.push(tweet);
  // convertimo de string a arreglo para pasalo al locar storage ya que este solo puede almacenar strings
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//funcion para obtener los tweets de localstorage  y  arreglar el problema de sobre escritura
//retorna un arreglo
function obtenerTweetsLocalStorage() {
  let tweets;
  //revisamos los valores de locar  storage
  if (localStorage.getItem("tweets") == null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}

// funcion para tomar los valores de local storage y montrarlo en la lista "mis tweets"

function localStorageListo() {
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet) {
    const botonborrar = document.createElement("a");
    // le definimos una clase al boton creado
    botonborrar.classList = "borrar-tweet";
    botonborrar.textContent = "eliminar";

    // creamos un nuevo elemnto para añadir a la lista de twweets
    const li = document.createElement("li");
    li.innerText = tweet;
    // aqui se añade el boton borrar al tweet
    li.appendChild(botonborrar);
    // añade un tweet a la lista
    listaTweets.appendChild(li);
  });
}
//eliminar tweet del local storage
function borrarTweetLocalStorage(tweet) {
  let tweets, tweetborrar;
  // se elimina la parte "eliminar" del tweet
  tweetborrar = tweet.substring(0, tweet.length - 8);

  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function(tweet, index) {
    if (tweetborrar === tweet) {
      tweets.splice(index, 1);
    }
  });

  localStorage.setItem("tweets", JSON.stringify(tweets));
}
