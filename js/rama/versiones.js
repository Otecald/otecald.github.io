var datos_versiones = [
	{versión:"1.16",fecha:"2020/03/20 Viernes",descripción:"<a target='_blank' href='https://github.com/otecald/otecald.github.io/'>Agregada versión GitHub</a>."},
	{versión:"1.15",fecha:"2016/08/27 22:30",descripción:"Cambiada la categoría Javascript por programación."},
	{versión:"1.14",fecha:"2016/08/27 17:03",descripción:"Agregado mi canal de Youtube"},
	{versión:"1.13",fecha:"2016/08/27",descripción:"Quitado fondo."},
	{versión:"1.12",descripción:"Detecta la última versión en el menú."},
	{versión:"1.11",descripción:"Agregado Menú y fondo estático."},
	{versión:"1.9",descripción:"Código mejorado."},
	{versión:"1.8", descripción:"Fondo más ligero de cargar. Mejora el formato. Proyecto 4 añadido."},
	{versión:"1.7", descripción:"Proyecto 3 añadido, diferencia de fechas en javascript."},
	{versión:"1.6", descripción:"Cambio de fondo con botones quitado."},
	{versión:"1.5", descripción:"Proyecto Nº2 añadido, alpha dinámico en flash."},
	{versión:"1.4", descripción:"Fondo dinámico."},
	{versión:"1.3", descripción:"Descripciones añadidas a los proyectos, capacidad de spoiler, favicon añadido."},
	{versión:"1.2", descripción:"Proyecto 1 añadido, transparencia en las imágenes."},
	{versión:"1.1", descripción:"Fondo de página añadido."},
	{versión:"1", descripción:"Mensaje de bienvenida."}
]
function obtener_valores_de_objeto(x){
	return Object.keys(x).map(x=>y[x])
}
function generar_versiones(contenido)
{
	var div_a = document.createElement("div")
	datos_versiones.map(x=>{
		if(fecha==undefined){
			fecha = ""
		}
		var div_b = document.createElement("div")

		div_b.setAttribute("align","left")
		div_b.innerHTML = obtener_valores_de_objeto(x).join(" - ")

		div_a.appendChild(div_b)
		contenido.appendChild(div_a)
	})
	return contenido
}

