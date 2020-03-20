var datosVersiones=[
	{versión:"1.16",fecha:"2020/03/20 Viernes",descripción:"<a target='_blank' href='https://github.com/Otecald/otecald.github.io/'>Agregada versión GitHub</a>."},
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

function generarVersiones()
{
	var i
	var salida="",actual,youtube,vínculo
	var longitud=datosVersiones.length
	for(i=0;i<longitud;i++)
	{
		actual=datosVersiones[i]
		versión=actual.versión
		fecha=actual.fecha
		texto=actual.descripción
		if(fecha==undefined){fecha="Tiempo desconocido."}
		salida+="<div align=\"left\">"+versión+" - "+fecha+" - "+texto+"</div>"
	}
	return salida
}

