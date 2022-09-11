function loadMenu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        var all = data.list;
        for(var i=0;i<all.length;i++){
            var date = all[i].dt_txt;
            var t = all[i].main.temp;
            var ic = all[i].weather[0].icon;
            var d = all[i].weather[0].description;
            console.log(all[i].weather.icon);
            var content = `<div class="main">
                <h2>
                    <span class="datetime">${date}</span>
                </h2>
                <span>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
                </span>
                <h1>
                    <span class="temp">${t}<sup>o</sup>C</span>
                </h1>
                <h3>
                    <span class="des">${d}</span>
                </h3>
            </div>`
            var div = document.getElementById("all");
            div.innerHTML += content;
        }
    }
    var link = "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true);
    xhttp.send();
}
loadMenu();