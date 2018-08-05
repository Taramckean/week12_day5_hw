var app = function(){
const url = 'https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=9c579210d4b74642b5749352c741d4f6';
makeRequest(url, requestComplete);

}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
console.log(this.status);
  const jsonString = this.responseText;
  const newsStories = JSON.parse(jsonString);
  createList(newsStories);
};

const createList = function(newsStories){
  let news = document.getElementById('news-list');
  newsStories.forEach(function(newsStory){
    let li = document.createElement('li');
    li.innerText = newsStory.articles.title;
    // let newsImage = document.createElement('img');
    // newsImage.src = newsStory.urlToImage;
    // li.appendChild(newsStory);

    news.appendChild(li);
  })
}
// http://www.omdbapi.com/?t=blade&apikey=4df95336
// https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=9c579210d4b74642b5749352c741d4f6
// https://github.com/Giphy/GiphyAPI VUDs1bI8zWspgd1idEBJ69Bimzl4xYd0
// https://newsapi.org/v2/top-headlines?country=us&apiKey=9c579210d4b74642b5749352c741d4f6
//
window.addEventListener('load', app);
