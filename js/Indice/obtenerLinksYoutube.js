function obtenerLinksYoutube()
{
	var y,imagen,linkYoutube,título
	var x=document.getElementsByClassName("yt-lockup-dismissable")
	var salida=[]
	for(var i=x.length-1;i>=0;i--)
	{
		if(!x[i].getElementsByClassName("video-unlisted-icon").length)
		{
			y=x[i].getElementsByClassName("yt-uix-tile-link")[0]
			salida[salida.length]={
				vínculo:y.href.split("=")[1],
				título:y.title
			}
		}
	}
	return salida
}
