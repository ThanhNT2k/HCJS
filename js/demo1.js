var x;
x = 10;
x = "xin chao cac ban";
x = 3.14;
var y = 20;
var z = x + y;  // 23.14
x = "hello";
var k = x + y; // hello 20
console.log(k); //print k
var t = true; // false
for(var i=0;i<10;i++){
    console.log("i="+i);
}
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
// duyet mang theo chi muc (index)
for(var i = 0;i<ar.length;i++){ //ar.length do kich thuoc cua mang
    console.log(ar[i]);
}
// duyet mang theo kieu xet tung phan tu - foreach
ar.map(xyz=>{
    console.log(xyz);
});
var tk = tinhtong(5,3);
var tk2 = tinhtong("hello",10);
function tinhtong(a,b) {
    return a+b;
}

console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody...");
    console.log("Hello everybody...");
    console.log("Hello everybody...");

}

// setTimeout(demo,3000); //sau 3000ms moi chay ham demo (callback function)

console.log("ABCXYZ...");
//var n = 10;
// // function countdown(){
//     var xyz = document.getElementById("head");
//     xyz.innerText = n;
//     console.log(n);
//     n--;
//     if(n<0){
//         clearInterval(si);
//     }
// // }
// setInterval(countdown,1000) // sau 1000ms lap lai vo han
//var si = setInterval(countdown,1000)

//viết chương trình cứ 2s in ra 1 số chẵn tăng dần theo thời gian
// in tối đa 10 số
var n = 0;
var m = 0;
function countdown(){
    var xyz = document.getElementById("head");
    xyz.innerText += " "+n;
            n+=2;
            m++;
        if(m>10){
            clearInterval(si);
        }
}
var si = setInterval(countdown,2000);