
const pessoal = {
    nome: "fabricio",
    idade: 30,
    endereço: "rua 37a",
    telefone: "21995733103"
};

function falar(){
    console.log("falou");
};

falar();

var local = window.location;

if (local === "http://127.0.0.1:5500/"){
    console.log(`o local é: ${local}`)
}else{
    console.log("não é")
}
"quero escrever uma string"
'quero escrever uma string'

var cabecalho = document.querySelector("h1");

function clicar(){
    document.getElementById("cabecalho").innerHTML = 'novo texto';
    document.getElementById("cabecalho").style.fontSize = '2rem';
    console.log(clicar);
    document.getElementById("segundo").innerHTML = 'texto tambem';
    document.getElementById("segundo").setAttribute("class", "democlass");

    var criado = document.createElement("criado");

    criado.innerHTML = "123";

    document.body.appendChild(criado);

}
document.getElementById('p').setAttribute("class", "classediv");
/*

    window.alert()
    document.write()
    innerHTML = ""
    console.log() 
*/

let x,y,z;
x = 6;
y = 5;
z = x +y;

console.log(` ${x} + ${y} = ${z} `)


var conteudo = document.getElementById("p");
var conteudo2 = document.getElementsByClassName("container");
var conteudo3 = document.getElementsByTagName("h1");


document.addEventListener("click", minhafuncao);

function minhafuncao() {
  document.getElementById("p").innerHTML = "Hello World";
}

