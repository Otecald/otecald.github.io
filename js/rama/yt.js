var videos = [
	{"url":"U_bxVetWnZI","máximo":"0","título":"Super Checker"},
	{"url":"AUc97PlF8Ho","máximo":"0","título":"Tierra 3D con atmósfera"},
	{"url":"hGPZICR9p5w","máximo":"1","título":"Park Racer"},
	{"url":"gE8vcuVqVBc","máximo":"0","título":"Jackal"},
	{"url":"eRxC4Wd9kfE","máximo":"0","título":"Nexuiz"},
	{"url":"qjzwXNeczA8","máximo":"1","título":"Cilindros cayendo en una Rampa"},
	{"url":"tEq30x44l-w","máximo":"0","título":"Trailer del Canal"},
	{"url":"j0YysuD1hP4","máximo":"0","título":"Probando renderizado en 3D"},
	{"url":"gIqTG5lcrE0","máximo":"0","título":"Vistazo a carácteres unicode"},
	{"url":"KRzhvwNALc4","máximo":"0","título":"Espejo de plasma con RayTrace"},
	{"url":"31Z_qGDtSyQ","máximo":"0","título":"Espejo normal con RayTrace"},
	{"url":"6Dng-SGSFz8","máximo":"0","título":"Modelo Warzone 2100 efectos"},
	{"url":"5huQ9Gnoi3M","máximo":"0","título":"Recreación de escenario de Hellsing"},
	{"url":"uFDEm3UQh0Q","máximo":"0","título":"Primera Escena - Hellsing Tribute"},
	{"url":"Fkth4dlq28Q","máximo":"0","título":"Renderizado - Prueba 02"},
	{"url":"jdb7hYN4p3o","máximo":"1","título":"Cubo espejado"},
	{"url":"kOCWSWbBW-c","máximo":"0","título":"Esfera de Vóxeles"},
	{"url":"RuoY4qXRHWs","máximo":"0","título":"Esfera de cubos"},
	{"url":"OGJJF4ZzliU","máximo":"0","título":"Cilindros cayendo en Rampa - 2"},
	{"url":"j3sWYqO_Wnk","máximo":"1","título":"Gravedad 2013"},
	{"url":"9xpjxoTexWo","máximo":"0","título":"Gravedad 2014"},
	{"url":"f-zty1gMYxw","máximo":"0","título":"Avión"},
	{"url":"2m4LXRFE0zM","máximo":"0","título":"Probando renderizado - 2"},
	{"url":"tjlZ_ruy5tY","máximo":"0","título":"Esfera Checker"},
	{"url":"QzWzYSjafqo","máximo":"0","título":"Establecimiento Browniano"},
	{"url":"xPKQ4GFwEGk","máximo":"0","título":"Esfera central"},
	{"url":"G8BneCP6mZ0","máximo":"1","título":"Otecald todo en uno (sin audio)"},
	{"url":"5nzozjfZfbk","máximo":"0","título":"Las Armas de Alucard (sin audio)"},
	{"url":"EXnviE7BMzM","máximo":"1","título":"Hellsing Tribute - Seras Victoria - Preview 3D"},
	{"url":"PSMBdaX9oSs","máximo":"1","título":"Seras Victoria 3D"},
	{"url":"yQvRs-qxH4I","máximo":"1","título":"Usuarios de StackOverflow en Español (vista previa)"},
	{"url":"JhBA7Z9yc7I","máximo":"1","título":"Usuarios de StackOverflow en Español"}
]

function generar_youtube(contenido)
{
	var salida="",actual,youtube
	var div = document.createElement(div)
	videos.map(x=>{
		var url = x.url
		var url_video = "https://www.youtube.com/watch?v=" + url

		var es_máximo = x.máximo==true
		var es_máximo = false // Se anula 

		var imagen = "https://i.ytimg.com/vi/" + url + "/" + es_máximo?"maxres":"hq" + "default.jpg"

		var tabla = document.createElement("table")
		var tr = document.createElement("tr")
		var td = document.createElement("td")
		var div_a = document.createElement("div")
		var div_b = document.createElement("div")
		var a_a = document.createElement("a")
		var a_b = document.createElement("a")
		var img = document.createElement("img")

		tabla.classList.add("yt")
		tabla.classList.add("tabla_centrada")

		a_a.setAttribute("target","_blank")
		a_b.setAttribute("target","_blank")

		a_a.setAttribute("href",url_video)
		a_b.setAttribute("href",url_video)

		img.setAttribute("src",imagen)

		a_b.innerHTML = x.título

		a_a.appendChild(img)
		div_a.appendChild(a_a)
		td.appendChild(div_a)

		div_b.appendChild(a_b)
		td.appendChild(div_b)

		tr.appendChild(td)
		tabla.appendChild(tr)
		div.appendChild(tabla)	
	})
	contenido.appendChild(div)
	return contenido
}
