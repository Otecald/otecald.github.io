function enteroHaciaHexadecimal(entero)
{
	var devuelve=-1
	if(entero>=0&entero<10){devuelve=entero+""}
	if(entero==10){devuelve="A"}
	if(entero==11){devuelve="B"}
	if(entero==12){devuelve="C"}
	if(entero==13){devuelve="D"}
	if(entero==14){devuelve="E"}
	if(entero==15){devuelve="F"}
	return devuelve
}
function agregarTexto(texto,booleano,tamaño)
{
	try{tamaño}catch(e){tamaño=13}
	if(booleano)
	{
		return texto
	}
	else
	{
		return "[size="+tamaño+"]"+texto+"[/size]"
	}
}
function gradual(booleano,tamañoFuente,frase)
{
	var a,b,c
	var tamaño=10
	var contador=10
	var salida=""
	if(frase==undefined){frase="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"}
	if(tamañoFuente==undefined){tamañoFuente=13}
	for(var i=0;i<frase.length;i++)
	{
		c=frase[i].charCodeAt()
		a=enteroHaciaHexadecimal( Math.floor(c/16) )
		b=enteroHaciaHexadecimal(c%16)
		if(booleano){salida+="[size="+tamañoFuente+"][[/size][size="+tamañoFuente+"]"}else{salida+="["}
		salida+="color=#"
		for(var j=0;j<6;j++)
		{
			salida+=enteroHaciaHexadecimal((Math.floor(Math.random()*16)))
		}
		salida+="]"
		if(booleano){salida+="[/size][size="+tamañoFuente+"][[/size][size="+tamañoFuente+"]"}else{salida+="["}
		salida+="size="+tamaño+"]"+Function("return '\\x"+a+b+"'")()
		if(booleano){salida+="[/size][size="+tamañoFuente+"][[/size][size="+tamañoFuente+"]"}else{salida+="["}
		salida+="/size]"
		if(booleano){salida+="[/size][size="+tamañoFuente+"][[/size][size="+tamañoFuente+"]"}else{salida+="["}
		salida+="/color]"
		if(booleano){salida+="[/size]"}
		contador++
		if(contador>30){tamaño--}else{tamaño++}
		if(tamaño<10){contador=11;tamaño=11}
	}
	return salida
}
clear()
gradual(false,13,"hola chicos")
