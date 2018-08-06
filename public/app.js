var app = function(){
const UKurl = 'https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=9c579210d4b74642b5749352c741d4f6';
makeRequest(UKurl, requestComplete);
const USurl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9c579210d4b74642b5749352c741d4f6';
makeRequest(USurl, USrequestComplete);
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
const USrequestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const USNewsStories = JSON.parse(jsonString).articles;
  // createList(newsStories);

  let usSelect = document.getElementById('select');
  console.log(usSelect);
  usSelect.addEventListener('change', function(){
    handleSelected(USNewsStories);
  })
};

const handleSelected = function(stories){
  createList(stories)
};
const createList = function(newsStories){
  let news = document.getElementById('news-list');
  newsStories.forEach(function(newsStory){

    let li = document.createElement('li');
    li.innerText = newsStory.title;
    let newsImage = document.createElement('img');
    newsImage.src = newsStory.urlToImage;
    let description = document.createElement('p');
    description.textContent = newsStory.description + " Published: " + newsStory.publishedAt;

    li.appendChild(newsImage);
    li.appendChild(description);
    news.appendChild(li);
    li.addEventListener('click', function(){
       window.location = newsStory.url;
    })
  })
}


window.addEventListener('load', app);
