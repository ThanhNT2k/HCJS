var n = 2;
var c = 0;
function countdown(){
    var a = document.getElementById("head");
    a.innerText += " "+n;
    for(var i=0;i<n;i++){
        if(n%i==0){
            n++;
        }
    }
    c++;
    if(c>19){
        clearInterval(si)
    }
}
var si = setInterval(countdown, 3000);