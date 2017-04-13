function main() {
    var hello = document.getElementById('hello');
    var now = new Date();
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November'];
    hello.innerHTML = 'Today is ' + week[now.getDay()] + ', ' + month[now.getMonth()] + ' ' + now.getDate() + '.';
}


document.addEventListener('DOMContentLoaded', main);
   
   
   