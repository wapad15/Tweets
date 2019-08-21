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
    const aux = e.target.parentElement.parentElement;
    e.target.parentElement.remove();
    alert("has eliminado el tweet: " + aux);
  }
}

//definicion de la funcion que agrega el tweet al local storage

function agregarTweetLocalStorage(tweet) {
  let tweets;
  //agregar a local storage
  localStorage.setItem("tweets", tweet);
}

//funcion para obtener los tweets de localstorage  y  arreglar el problema de sobre escritura
function obtenerTweetsLocalStorage() {
  let tweets;
  //revisamos los valores de locar  storage
  if (localStorage.getItem("tweets" == null)) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
}
