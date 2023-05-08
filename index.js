
function encriptar(){
	let texto= document.getElementById("texto").value;
	let tituloMensaje = document.getElementById("titulo-mensaje");
	let parrafo = document.getElementById("parrafo");
	let dibujo = document.getElementById("dibujo");
	let textoCifrado = texto
						.replace(/a/gi,"aih")
						.replace(/e/gi,"eih")
						.replace(/i/gi,"iih")
						.replace(/o/gi,"ouh")
						.replace(/u/gi,"uuh");
	if(texto.length !=0){
		document.getElementById("texto").value=textoCifrado;
		tituloMensaje.textContent="Texto encriptado con éxito";
		parrafo.textContent = "";
		dibujo.src = "./Encriptado.png";
		}
		else{
		dibujo.src = "./Dudas.jpg";
		tituloMensaje.textContent= "Ningún mensaje fue encontrado";
		parrafo.textContent = "Ingresa el texto que deseas Encriptar o Desencriptar";
		alert("Debes ingresar algún texto");
		}
	}
	function desencriptar(){
	let texto= document.getElementById("texto").value;
	let tituloMensaje = document.getElementById("titulo-mensaje");
	let parrafo = document.getElementById("parrafo");
	let dibujo = document.getElementById("dibujo");
	
	let textoCifrado = texto
						.replace(/aih/gi,"a")
						.replace(/eih/gi,"e")
						.replace(/iih/gi,"i")
						.replace(/ouh/gi,"o")
						.replace(/uuh/gi,"u");
	if(texto.length !=0){
		document.getElementById("texto").value=textoCifrado;
		tituloMensaje.textContent="Texto desencriptado con éxito";
		parrafo.textContent = "";
		dibujo.src = "./Desencriptado.jpg";
		}
		else{
		dibujo.src = "./Dudas.jpg";
		tituloMensaje.textContent= "Ningún mensaje fue encontrado";
		parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
		alert("Debes ingresar algún texto");
		}
	}