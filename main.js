const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");
const txtCor = document.getElementById("cor");
var cor = "#ff0000";

canvas.addEventListener("mousedown",clique);

function clique(e){
    var novaCor = document.getElementById("cor").value;
    if(novaCor){
        cor = novaCor; 
    }
    var posiçãoX = e.offsetX;
    var posiçãoY = e.offsetY;
    circulo(posiçãoX,posiçãoY)

}
function circulo(x,y){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}
function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
txtCor.addEventListener("input",function(){
    cor = txtCor.value;
});
