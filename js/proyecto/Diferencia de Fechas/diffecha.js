function inicio()
{
	día2.value=new Date().getYear()
	mes2.value=new Date().getMonth();mes2.value=mes2.value*1+1
	día2.value=new Date().getDate()
	comprobar()
}
function comprobar()
{
	ASA=0
	mesa=mes1.value*1;mesb=mes2.value*1
	if(mesa>12){ASA+=1}
	if(mesb>12){ASA+=1}
	resudif.value="0 Días"
	añosdif.value="1/1/1"
	fechado.value="0 Años, 0 Mes, 0 Días."
	if(ASA==0){convefecha()}
}
function convefecha()
{
	debug.value=""
	días=0
	debug.value+=días+"\n"
	meses=[31,-1,31,30,31,30,31,31,30,31,30,31]
	añoa=año1.value*1;añob=año2.value*1;difeb(añoa)
	mesa=mes1.value*1;mesb=mes2.value*1
	diaa=día1.value*1;diab=día2.value*1
	comecha()
	if(fecha1==fecha2){
		resudif.value="0 Días"
		añosdif.value="1/1/1"
		fechado.value="0 Años, 0 Mes, 0 Días."}
	else{
		resudif.value="";añosdif.value="";fechado.value=""
		diaa-=1;mesa-=1;diab-=1;mesb-=1
		if(añoa>0){añoa-=1;difeb(añoa)}else{añoa+=1;difeb(añoa)}
		if(añob>0){añob-=1;difeb(añoa)}else{añob+=1;difeb(añoa)}
		//Cambiando mayor
		if(añoa>añob){
			añoc=añoa;añoa=añob;añob=añoc;difeb(añoa)
			mesc=mesa;mesa=mesb;mesb=mesc
			diac=diaa;diaa=diab;diab=diac
			comecha()}
		else{
			if(añoa==añob)
			{
				if(mesa>mesb){
					añoc=añoa;añoa=añob;añob=añoc;difeb(añoa)
					mesc=mesa;mesa=mesb;mesb=mesc
					diac=diaa;diaa=diab;diab=diac
					comecha()}
				else{if(mesa==mesb){if(diaa>diab){
							añoc=añoa;añoa=añob;añob=añoc;difeb(añoa)
							mesc=mesa;mesa=mesb;mesb=mesc
							diac=diaa;diaa=diab;diab=diac
							comecha()}}
				}
			}
		}
		AAD=0
		mqod(añoa,mesa,diaa)
		mqod(añob,mesb,diab)
		if(AAD==1){diaa+=10}
		//Libre
		if(añoa==añob){may()}
		else{
			difez()
			if(fecha1!=fecha2){may()}}
		resudif.value=días+" Días"
		añosdif.value="1/1/1"
		fechado.value="0 Años, 0 Mes, 0 Días."
		dma()
	}
}
function difeb(AAE)
{
	if(AAE>0){AAE+=1;AS=0}else{AAE-=1;AS=1}
	meses[1]=28
	if(AAE%400==0){meses[1]=29}
	else{if(AAE%100!=0){if(AAE%4==0){meses[1]=29}}}
	if(meses[1]==29){diasaño=366}else{diasaño=365}
	if(AS==1){AAE+=1}else{AAE-=1}
}
function comecha()
{
	fecha1=diaa+"/"+mesa+"/"+añoa
	fecha2=diab+"/"+mesb+"/"+añob
	difaños=añob-añoa
}
function diaz()
{
	días+=meses[mesa]-diaa
	diaa=0
	mesa+=1
	comecha()
	if(meses[mesa]>diaa){debug.value+=(meses[mesa]-diaa)+"\n"}
	else{debug.value+=(diaa-meses[mesa])+"\n"}
}
function diax()
{
	días+=diab-diaa;diaa=diab;comecha()
	if(diab>diaa){debug.value+=(diab-diaa)+"\n"}
	else{debug.value+=(diaa-diab)+"\n"}
}
function difez()
{
	if(difaños>=400)
	{
		while(difaños%400!=0){difaños-=1}
		difaños/=400
		días+=(146097*difaños);debug.value+="146097*"+difaños+"\n"
		añoa+=(400*difaños);difeb(añoa);comecha()
		difaños=añob-añoa
		difeq()
	}
	else{difeq()}
}
function difeq()
{
	if(difaños>=4)
	{
		while(difaños%4!=0){difaños-=1}
		difaños/=4
		días+=(1461*difaños);debug.value+="1461*"+difaños+"\n"
		añoa+=(4*difaños);difeb(añoa);comecha()
		difaños=añob-añoa
	}
	días2=días
	while(difaños>0)
	{
		difeb(añoa)
		días+=diasaño
		añoa+=1
		difaños-=1
	}
	debug.value+=(diasaño)+"\n"
}
function mez(AAF,AAG)
{
	if(AAF==12)
	{
		AAF=0
		AAG+=1
		difeb(AAG)
		comecha()
	}
}
function may()
{
	if(mesa==mesb){diax()}
	else{
		if(diaa>0){días2=días;diaz();debug.value+=(días2-días)+"\n"}
		if(mesa==mesb){diax()}
		else{
			días2=días
			while(mesa<mesb){meu()}
			if(días>días2){debug.value+=(días-días2)+"\n"}
			else{debug.value+=(días2-días)+"\n"}
			diax()}
	}
}
function meu()
{
	días+=meses[mesa]
	mesa+=1
	mez(mesa,añoa)
}
function dma()
{
	años3=0;mess3=0;dias3=0
	while(días>=146097000000){días-=146097000000;años3+=400000000}
	while(días>=146097000){días-=146097000;años3+=400000}
	while(días>=146097){días-=146097;años3+=400}
	while(días>=1461){días-=1461;años3+=4}
	difeb(años3)
	while(días>diasaño)
	{
		difeb(años3)
		días-=diasaño
		años3+=1
	}
	while(días>meses[mess3])
	{
		días-=meses[mess3]
		mess3+=1
	}
	dias3=días
	fechado.value=años3+" Años, "+mess3+" Meses, "+dias3+" Días."
	años3+=1;mess3+=1;dias3+=1
	if(AAD==1){dias3+=10}{mez(mess3,años3)}
	añosdif.value=dias3+"/"+mess3+"/"+años3
}
function mqod(AAA,AAB,AAC)
{
	if(AAA<1582)
	{if(AAA==1581){if(AAB<10)
			{if(AAB==9){if(AAC<=4){AAD+=1}}
				else{AAD+=1}}
		}
		else{AAD+=1}
	}
}
