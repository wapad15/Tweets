/*const listTweets = document.querySelector('#lista-tweets');
const formTweet = document.querySelector('#formulario');

function addTweet() {
    formTweet.addEventListener('submit', e => {
        e.preventDefault();
        const tweet = document.getElementById('tweet');
        CreateTweetItem(tweet.value);
        saveLocalStogare(tweet.value);
        tweet.value = '';
    });
}

function CreateTweetItem(tweet) {
    const li = document.createElement('li');
    li.textContent = tweet;

    const btnDelete = document.createElement('a');
    btnDelete.classList.add('borrar-tweet');
    btnDelete.textContent = 'X';
    li.appendChild(btnDelete);
    listTweets.appendChild(li);
}

function saveLocalStogare(tweet) {
    let tweets = getTweetsLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsLocalStorage() {
    let tweets = [];
    if (localStorage.getItem('tweets'))
        tweets = JSON.parse(localStorage.getItem('tweets'));
    return tweets;
}

function loadTweetsOfLocalStorage() {
    document.addEventListener('DOMContentLoaded', e => {
        let tweets = getTweetsLocalStorage();
        tweets.forEach(tweet => {
            CreateTweetItem(tweet);
        });
    });
}

function deleteTweet() {
    listTweets.addEventListener('click', e => {
        if (e.target.classList.contains('borrar-tweet')) {
            const parent = e.target.parentElement;
            parent.remove();
            deleteTweetLocalStorage(parent.textContent);
        }
    });
}

function deleteTweetLocalStorage(tweet) {
    let tweets = getTweetsLocalStorage();
    let tweetDelete = tweet.slice(0, -1);

    tweets.forEach((tweet, index) => {
        if (tweet === tweetDelete)
            tweets.splice(index, 1);
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function main() {
    addTweet();
    deleteTweet();
    loadTweetsOfLocalStorage();
}

main(); */
