window.addEventListener('load', function (e) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL("style.css");;
    document.head.appendChild(link);
}, false);

var test ="test";

function showCoin(obj){
    for( i=0; i< obj.length; i++ )
    {
        var img = document.createElement("img");
        img.src = chrome.runtime.getURL("images/logo512re.png");
        img.style.width = "50px";
        img.style.position = "absolute";
           
        obj[i].appendChild(img);
    }
}

function replaceImg(){
    var ims = document.getElementsByTagName("img");
    for( i=0; i< ims.length; i++ )
    {
       ims[i].src = chrome.runtime.getURL("images/logo512re.png");
    }
}

function replaceImg(){
    var tiles = document.getElementsByClassName("tile-inner");
    for( i=0; i< tiles.length; i++ )
    {
       tiles[i].backgroundImage = `url(${chrome.runtime.getURL("images/logo512re.png")}) !important`
    }
}


document.body.style.backgroundImage = "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb1%2FMale_mallard_standing.jpg%2F220px-Male_mallard_standing.jpg&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FCanard&tbnid=L4pWU9bTISaPLM&vet=12ahUKEwiJ1ordwJT4AhU_XvEDHYT7Au8QMygBegUIARDaAQ..i&docid=Ly7LaZkGQso-iM&w=220&h=165&q=canard&ved=2ahUKEwiJ1ordwJT4AhU_XvEDHYT7Au8QMygBegUIARDaAQ')";


setInterval(()=>{
    showCoin(document.getElementsByTagName("p"));
    showCoin(document.getElementsByTagName("h1"));
    showCoin(document.getElementsByTagName("h2"));
    showCoin(document.getElementsByTagName("h3"));
    try{
        replaceTiles();
    }
    finally{}
    replaceImg();
},500);

