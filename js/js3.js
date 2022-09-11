function update(city){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var ct = data.name + ", "+data.sys.country;
        document.getElementById("city").innerText = ct;
        bg.style.display = "none";
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true);
    xhttp.send();
}