function sequencenumber(a,b)
{
	var c,d,e,f,g,h,i,j,k
	
	a=a.toString()
	a='["'+a+'"]'
	k=""
	for(j=0;j<a.length;j++){if(a[j]!=","){k+=""+a[j]}else{k+='","'}}
	a=JSON.parse(k)
	//j=0
	for(j=0;j<a.length;j++)
	{
		g="";i=0
		while(i<1)
		{
			for(h=1;h<b;h++){g=a[j][a[j].length-h]+g}
			c=0;d=a[j].search(g+""+c);if(d==-1){d=0}else{d=1}
			c=1;e=a[j].search(g+""+c);if(e==-1){e=0}else{e=1}
			f=[d,e]
			//Acá viene lo que se encontró en a
			//Por hacer: [x,2x+1,2x+2] [0,1,2]
			if(f[0]!=f[1]){a[j]+=""+f[0]}
			if(f[0]==f[1]){a[j]=[a[j]+"0",a[j]+"1"];i++}
			i+=0.0001
		}
	}
	//a=JSON.stringify(a)
	d=a;f="" //Esto copia la variable a
	a=a.toString()
	a='["'+a+'"]'
	k=""
	for(j=0;j<a.length;j++){if(a[j]!=","){k+=""+a[j]}else{k+='","'}}
	a=JSON.parse(k)
	//Final Quitar los de longitud baja
	c=[];e=0
	for(j=0;j<a.length;j++)
	{
		c[j]=a[j].length
		if(e<c[j]){e=c[j]}
	}
	g=0
	for(j=0;j<a.length;j++)
	{
		if(e==a[j].length)
		{
			if(f!=""){f+=","}
			f+=""+a[j]
			g++
		}
	}
	c=c.toString()
	//Return
	b++
	a=f
	//a=d.toString()
	return [a,b,c,(a.length).toString(),g]
}
