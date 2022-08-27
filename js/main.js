function botao(){
	//alert("obrigado por clicar");
	document.getElementById("agradecimento").innerHTML ="<b>obrigado por clicar<b>";
	//console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
	window.open("https://devjr.netlify.app/#ourcourses");
	//window.location.href="site";
}

function trocar(){
	document.getElementById("mousemove").innerHTML ="<b>Passou o mouse<b>";
	//alert("Trocar texto");
}

function voltar(){
	document.getElementById("mousemove").innerHTML ="<b>Passe o mouse aqui<b>";
	//alert("Trocar texto");
}

function load(){
	alert("pagina carregada");
}

function mudar(elemento){
	alert(elemento.value);
}
/*
function trocar(elemento){
	elemento.innerHTML = "Passou o mouse";
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
}
*/

/*var nome = "Matsuhe";
var idade = 25;
alert("Bem vindo "+nome+", vc ja tem "+idade+" anos.");
var frase = "Meu pai amado";
console.log(frase);
console.log(frase.replace("amado","celestial"));
var frase2 = frase.toLowerCase;
console.log(frase);
var lista= ["maça","pêra","laranja"];
console.log(lista);
console.log(lista.reverse());
//lista.push("uva");
//lista.pop("uva");
console.log(lista.toString());
console.log(lista.join(" - "));
var fruta = {nome : "maça",cor: "vermelha"};
console.log(fruta.nome);
var frutas = [{nome : "maça",cor: "vermelha"},{nome : "uva",cor: "roxa"}];
console.log(frutas);
var idade = prompt("Qual sua idade?")
if (idade > 18){
	console.log("maior");
}else{
	console.log("menor");
}

var d = new Date(); 
//alert(d.getDay());
//alert(d.getMonth());
//alert(d.getMinutes());

// while,for -> mesma coisa do C.
// function é a funcao do java script funciona similiar ao c: function(x,y){}

*/
