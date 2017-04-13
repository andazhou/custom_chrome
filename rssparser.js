

function main() {
    
    $.get('http://rss.cnn.com/rss/cnn_topstories.rss', function (data) {
        parseCNN(data);
    });
    
    $.get('http://feeds.foxnews.com/foxnews/latest?format=xml', function (data) {
        parseFOX(data);
    });

}

function parseCNN(data) {
    var stories = data.getElementsByTagName('item');
    var feed = document.getElementById('CNNfeed');
    for (var i = 0; i < 5; i++) {
        var item = document.createElement('div');
        item.setAttribute('id', 'cnnstory');
        var title = stories[i].getElementsByTagName('title')[0].textContent;
        var descript = document.createElement('div');
        descript.innerHTML = stories[i].getElementsByTagName('description')[0].textContent;
        var linkurl = stories[i].getElementsByTagName('link')[0].textContent;
        var date = stories[i].getElementsByTagName('pubDate')[0].textContent;
        var srcstr = '<a href="' + linkurl + '">' + title + '</a><br>';
        srcstr += descript.textContent;
        srcstr += '<br><font size="1">' + date + '</font>';
        item.innerHTML = srcstr;
        console.log(item);
        feed.appendChild(item);
        
    }
console.log(data);
}

function parseFOX(data) {
    var stories = data.getElementsByTagName('item');
    var feed = document.getElementById('FOXfeed');
    for (var i = 0; i < 5; i++) {
        var item = document.createElement('div');
        item.setAttribute('id', 'foxstory');
        var title = stories[i].getElementsByTagName('title')[0].textContent;
        var descript = document.createElement('div');
        descript.innerHTML = stories[i].getElementsByTagName('description')[0].textContent;
        var linkurl = stories[i].getElementsByTagName('link')[0].textContent;
        var date = stories[i].getElementsByTagName('pubDate')[0].textContent;
        var srcstr = '<a href="' + linkurl + '">' + title + '</a><br>';
        if (descript.length > 0) {
            srcstr += descript.textContent + '<br>';
        }
        srcstr += '<font size="1">' + date + '</font><br>';
        item.innerHTML = srcstr;
        console.log(item);
        feed.appendChild(item);
        
    }
console.log(data);
}


document.addEventListener('DOMContentLoaded', main);
   