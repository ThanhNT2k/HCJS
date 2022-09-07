function update1(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var t = data.main.temp;
        document.getElementById("temp").innerText = t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pressure = data.main.pressure;
        document.getElementById("pressure").innerText = pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",url,true);
    xhttp.send();
}function update2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var t = data.main.temp;
        document.getElementById("temp").innerText = t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pressure = data.main.pressure;
        document.getElementById("pressure").innerText = pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=saigon,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",url,true);
    xhttp.send();
}function update3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var t = data.main.temp;
        document.getElementById("temp").innerText = t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pressure = data.main.pressure;
        document.getElementById("pressure").innerText = pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",url,true);
    xhttp.send();
}function update4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var t = data.main.temp;
        document.getElementById("temp").innerText = t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pressure = data.main.pressure;
        document.getElementById("pressure").innerText = pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",url,true);
    xhttp.send();
}function update5(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);

        var t = data.main.temp;
        document.getElementById("temp").innerText = t;

        var ct = data.name +", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var pressure = data.main.pressure;
        document.getElementById("pressure").innerText = pressure;
    };
    var url = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",url,true);
    xhttp.send();
}