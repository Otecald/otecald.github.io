function remover_clase(selector_css,clase){
	Array.from(document.querySelectorAll(selector_css)).map(x=>x.classList.remove(clase))
}
function agregar_clase(selector_css,clase){
	Array.from(document.querySelectorAll(selector_css)).map(x=>x.classList.add   (clase))
}
function ocultar_contenido(id){
	if(id!=undefined){
		remover_clase("#"+id,"mostrado")
		agregar_clase("#"+id,"oculto")
	}else{
		remover_clase(".contenido","mostrado")
		agregar_clase(".contenido","oculto")
	}
}
function mostrar_contenido(id){
	if(id!=undefined){
		remover_clase("#"+id,"oculto")
		agregar_clase("#"+id,"mostrado")
	}else{
		remover_clase(".contenido","oculto")
		agregar_clase(".contenido","mostrado")
	}
}
function cambiar_visibilidad_contenido(contenido){
	var id = contenido.id
	var condición_1 = contenido.classList.contains("oculto")
	var condición_2 = contenido.classList.contains("mostrado")
	if(condición_1&&!condición_2){
		ocultar_contenido()
		mostrar_contenido(id)
	}else{
		if(!condición_1&&condición_2){
			ocultar_contenido(id)
		}
	}
}
function mostrar(esto)
{
	var id = +esto.id.slice(1)
	var nombre_de_contenido = "#mostrar"+id
	var contenido = document.querySelector(nombre_de_contenido)
	var está_cargado = contenido.classList.contains("cargado")
	var título_youtube = "Mis videos de Youtube"
	cambiar_visibilidad_contenido(contenido,id)
	if(!está_cargado){
		contenido.classList.add("cargado")
		switch(id){
			case 1:generar_versiones   (contenido);break;
			case 2:generar_youtube     (contenido,título_youtube);break;
			case 3:generar_programación(contenido);break;
		}
	}
}
function color(esto,booleano)
{
	if(booleano)
	{
		esto.style.color="7fee"
		esto.style.cursor="hand"
	}
	else
	{
		esto.style.color="7efe"
	}
}
function cargar_versión()
{
	var versión = document.querySelector("#v1")
	var contenido = document.querySelector(".contenido")
	mostrar(versión)
	var mensaje = [document.title,"v"].join("\x20")
	var texto_versión = contenido.textContent.split(" - ")[0]
	var texto_versión_actual = mensaje + texto_versión
	versión.innerHTML = texto_versión_actual
}
function cargar_todo()
{
	cargar_versión()
}
function iniciar(callback,opciones){
	/* Opciones:
		var opciones = {
			puede_depurar: true | false
			, milisegundos: 10 | 20 | 50 | 100 // ...
		}
	*/	
	var iniciado = false
	var contador = 0
	var errores = []
	var intervalo = setInterval(function(){
		try{
			callback()
			iniciado = true
		}catch(e){
			if(opciones.puede_depurar){
				console.log(e)
			}
			errores.push(e)
			if(++contador==1000){
				clearInterval(intervalo)
				var depurado = (function mostrar_errores(){
					if(errores.length>0){
						console.log(errores.shift())
						setTimeout(mostrar_errores,50)
					}
				})()
			}
		}
		if(iniciado){
			clearInterval(intervalo)
			if(opciones.puede_depurar){
				console.log(iniciado,contador)
			}
		}
	},opciones && opciones.milisegundos?opciones.milisegundos:0)
	return intervalo
}
iniciar(cargar_todo)
