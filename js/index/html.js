function mostrar(objetoVisualizar)
{
	var objeto=document.all[objetoVisualizar]
	var estilo=objeto.style
	var muestra=estilo.display
	for(var i=1;i<=3;i++)
	{
		document.all["mostrar"+i].style.display='none'
	}
	mostrar2.innerHTML=""
	if(muestra=="none")
	{
		if(objetoVisualizar=="mostrar1")
		{
			objeto.innerHTML=generarVersiones()
		}
		if(objetoVisualizar=="mostrar2")
		{
			objeto.innerHTML="<div>Mis videos de Youtube</div><div>"+generarYoutube()+"</div>"
		}
		if(objetoVisualizar=="mostrar3")
		{
			objeto.innerHTML="<div>"+generarProgramación()+"</div>"
		}
		estilo.display='block'
	}
	else
	{
		estilo.display="none"
	}
}
function cargarVersión()
{
	mostrar1.innerHTML=generarVersiones()
	var salida="Versión actual: "
	var versión=mostrar1.getElementsByTagName("div")[0].innerHTML.split(" ")[0]
	var actual=salida+versión
	V1.innerHTML=actual
}
function cargarTodo()
{
	cargarVersión()
}
function color(esto,booleano)
{
	if(booleano)
	{
		esto.style.color="7FFFFF"
		esto.style.cursor="hand"
	}
	else
	{
		esto.style.color="FFFFFF"
	}
}
