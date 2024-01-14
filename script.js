//document.getElementById("mytxt").innerHTML = "Hello Impact!"; //se modifica textul in pagina

//let var1 = documet.getElementById("mytxt1");
//var1.innerHTML = ""; - o alta metoda de a modifica textul

let btn = document.getElementById("btn");
function changeTxt(){
    btn.innerHTML = "Ooops";
    btn.style.color = "red";
    btn.style.background = 'black';
    background.color = "black"
}

document.getElementById("btn").addEventListener("click", changeTxt)
