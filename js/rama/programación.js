var datos_programación = [
	{
		título:"Charlavod",
		descripción:"Extensión del Chrome que le da mejoras a Chatovod.",
		foto  :"charlavod/mod/thumb.png",
		enlace:"charlavod/mod/Chatovod_Mod.html"
	},{
		título:"Bot conversacional para Chatovod",
		descripción:"Bot para Chatovod, OtecaldBot (no funciona)",
		foto  :"OtecaldBot/Thumb.png",
		enlace:"OtecaldBot/Bot.html"
	},{
		título:"Secuencia Binaria",
		descripción:"Javascript que genera una secuencia binaria irracional única, parecida a pi.",
		foto  :"Secuencia Binaria/Thumb.png",
		enlace:"Secuencia Binaria/Secuencia Binaria.html"
	},{
		título:"Base 64 hacia palabras de Wikcionario y viceversa.",
		descripción:"Convierte código base 64 a palabras de Wikcionario y palabras a base 64.",
		foto  :"Base64_Wikcionario/Thumb.png",
		enlace:"Base64_Wikcionario"
	},{
		título:"Diferencia de Fechas",
		descripción:"Javascript que obtiene la diferencia que hay entre dos fechas.",
		foto  :"Diferencia%20de%20Fechas/Thumb.png",
		enlace:"Diferencia%20de%20Fechas/Diferencia%20de%20fechas.html"
	}
]
function generar_programación(contenido)
{
	var url = "/js/proyecto/"

	var div = document.createElement("div")
	datos_programación.map(x=>{
		var tabla = document.createElement("table")
		var tr = document.createElement("tr")
		var td = document.createElement("td")
		var h4 = document.createElement("h4")
		var div_td = document.createElement("div")
		var div_foto = document.createElement("div")
		var a = document.createElement("a")
		var foto = document.createElement("img")

		tabla.setAttribute("class","tabla_centrada")
		h4.innerHTML = x.título
		div_td.innerHTML = x.descripción

		foto.src = url+x.foto
		a.setAttribute("target","_blank")
		a.setAttribute("href",url+x.enlace)

		td       .appendChild(div_td)

		a        .appendChild(foto)
		div_foto .appendChild(a)
		td       .appendChild(div_foto)

		td       .appendChild(h4)
		tr       .appendChild(td)
		tabla    .appendChild(tr)
		div      .appendChild(tabla)
		contenido.appendChild(div)
	})
	return contenido
}
