function seqSwitch(a,b){switch(b){
	case 1:return sequencenumber1(a,b)
	case 2:return sequencenumber2(a,b)}}

function sequencenumber(a,b)
{
	var c=[-1,-1],i=[],d=b,e=a.length,f=""
	a=unirArray(a)
	for(i[1]=0;i[1]<e;i[1]++)
	{
		while(d==b)
		{
			a=unirArray(a)
			f="";for(i[0]=1;i[0]<b;i[0]++){f=a[i[1]][a[i[1]].length-i[0]]+f}
			for(i[0]=0;i[0]<2;i[0]++){
				c[i[0]]=a[i[1]].search(f+i[0])
				if(c[i[0]]==-1){c[i[0]]=0}else{c[i[0]]=1}}
			if(c=="1,1"){a[i[1]]=[a[i[1]]+0,a[i[1]]+1];b++}
			if(c=="1,0"||c=="0,1"){a[i[1]]+=c[0];i[1]=0}
			if(c=="0,0"){a[i[1]]=[a[i[1]]+0,a[i[1]]+1]}
		}
	}
	return [a,b,a.length,a.toString().length]
}

function unirArray(a)
{
	var b=0;c=""
	a=a.toString()
	for(var i=0;i<a.length;i++){
		if(a[i]==0||a[i]==1){if(b!=0){c+="\x22,\x22";b=0};if(c=="\x22,\x22"){c=""};c+=a[i]}else{b++}}
	return JSON.parse("[\x22"+c+"\x22]")
}
