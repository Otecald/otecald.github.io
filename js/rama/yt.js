var datosYoutube=[
	{"vínculo":"U_bxVetWnZI","máximo":"0","título":"Super Checker"},
	{"vínculo":"AUc97PlF8Ho","máximo":"0","título":"Tierra 3D con atmósfera"},
	{"vínculo":"hGPZICR9p5w","máximo":"1","título":"Park Racer"},
	{"vínculo":"gE8vcuVqVBc","máximo":"0","título":"Jackal"},
	{"vínculo":"eRxC4Wd9kfE","máximo":"0","título":"Nexuiz"},
	{"vínculo":"qjzwXNeczA8","máximo":"1","título":"Cilindros cayendo en una Rampa"},
	{"vínculo":"tEq30x44l-w","máximo":"0","título":"Trailer del Canal"},
	{"vínculo":"j0YysuD1hP4","máximo":"0","título":"Probando renderizado en 3D"},
	{"vínculo":"gIqTG5lcrE0","máximo":"0","título":"Vistazo a carácteres unicode"},
	{"vínculo":"KRzhvwNALc4","máximo":"0","título":"Espejo de plasma con RayTrace"},
	{"vínculo":"31Z_qGDtSyQ","máximo":"0","título":"Espejo normal con RayTrace"},
	{"vínculo":"6Dng-SGSFz8","máximo":"0","título":"Modelo Warzone 2100 efectos"},
	{"vínculo":"5huQ9Gnoi3M","máximo":"0","título":"Recreación de escenario de Hellsing"},
	{"vínculo":"uFDEm3UQh0Q","máximo":"0","título":"Primera Escena - Hellsing Tribute"},
	{"vínculo":"Fkth4dlq28Q","máximo":"0","título":"Renderizado - Prueba 02"},
	{"vínculo":"jdb7hYN4p3o","máximo":"1","título":"Cubo espejado"},
	{"vínculo":"kOCWSWbBW-c","máximo":"0","título":"Esfera de Vóxeles"},
	{"vínculo":"RuoY4qXRHWs","máximo":"0","título":"Esfera de cubos"},
	{"vínculo":"OGJJF4ZzliU","máximo":"0","título":"Cilindros cayendo en Rampa - 2"},
	{"vínculo":"j3sWYqO_Wnk","máximo":"1","título":"Gravedad 2013"},
	{"vínculo":"9xpjxoTexWo","máximo":"0","título":"Gravedad 2014"},
	{"vínculo":"f-zty1gMYxw","máximo":"0","título":"Avión"},
	{"vínculo":"2m4LXRFE0zM","máximo":"0","título":"Probando renderizado - 2"},
	{"vínculo":"tjlZ_ruy5tY","máximo":"0","título":"Esfera Checker"},
	{"vínculo":"QzWzYSjafqo","máximo":"0","título":"Establecimiento Browniano"},
	{"vínculo":"xPKQ4GFwEGk","máximo":"0","título":"Esfera central"},
	{"vínculo":"G8BneCP6mZ0","máximo":"1","título":"Otecald todo en uno (sin audio)"},
	{"vínculo":"5nzozjfZfbk","máximo":"0","título":"Las Armas de Alucard (sin audio)"},
	{"vínculo":"EXnviE7BMzM","máximo":"1","título":"Hellsing Tribute - Seras Victoria - Preview 3D"},
	{"vínculo":"PSMBdaX9oSs","máximo":"1","título":"Seras Victoria 3D"},
	{"vínculo":"yQvRs-qxH4I","máximo":"1","título":"Usuarios de StackOverflow en Español (vista previa)"},
	{"vínculo":"JhBA7Z9yc7I","máximo":"1","título":"Usuarios de StackOverflow en Español"}
]

function generarYoutube()
{
	var i
	var salida="",actual,youtube,vínculo
	var longitud=datosYoutube.length
	for(i=0;i<longitud;i++)
	{
		actual=datosYoutube[i]
		vínculo=actual.vínculo
		youtube="https://www.youtube.com/watch?v="+vínculo
		esMáximo=actual.máximo==true
		esMáximo=false
		imagen="https://i.ytimg.com/vi/"+vínculo+"/"
		imagen+=esMáximo?"maxres":"hq"
		imagen+="default.jpg"
		salida+='<table class="yt tabla_centrada" ><tr><td><a target="_blank" href="' + youtube + '" ><img src="' + imagen + '" ></img></a></td></tr><tr><td><a href="' + youtube + '" >' + actual.título + '</a></td></tr></table>\n'
	}
	return salida
}
