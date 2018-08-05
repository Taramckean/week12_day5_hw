var app = function(){
const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=VUDs1bI8zWspgd1idEBJ69Bimzl4xYd0 ';
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
  const stories = JSON.parse(jsonString);
  createList(stories);
};


const createList = function(stories){
  let news = document.getElementById('news-list');
  stories.forEach(function(story.data){
    let li = document.createElement('li');
    li.innerText = story.data.slug;
    console.log(li);
    // let newsImage = document.createElement('img');
    // newsImage.src = newsStory.urlToImage;
    // li.appendChild(newsStory);

    news.appendChild(li);
  })
}

window.addEventListener('load', app);
