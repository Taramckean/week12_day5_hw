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
  const jsonString = this.responseText;
  const newsStories = JSON.parse(jsonString).articles;
  createList(newsStories);
};

const createList = function(newsStories){
  let news = document.getElementById('news-list');
  newsStories.forEach(function(newsStory){
    let li = document.createElement('li');
    li.innerText = newsStory.title;
    let newsImage = document.createElement('img');
    newsImage.src = newsStory.urlToImage;
    li.appendChild(newsImage);
    news.appendChild(li);
  })
}

window.addEventListener('load', app);
