function obtener_url_de_videos()
{
	var x = document.getElementsByClassName("yt-lockup-dismissable")
	var salida=[]
	for( var i=x.length-1; i>=0; --i )
	{
		if(!x[i].getElementsByClassName("video-unlisted-icon").length)
		{
			var y=x[i].getElementsByClassName("yt-uix-tile-link")[0]
			salida[salida.length]={
				vínculo:y.href.split("=")[1],
				título:y.title
			}
		}
	}
	return salida
}
