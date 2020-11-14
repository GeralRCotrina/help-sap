
var tdp = ['','','','',''];
var tdv = ['','','','',''];
var tdl = [];
var Listat = [];


window.onload = function() {
	CargarAnimacion();
	Listat = Lista;
	Crgrlst();
}


function Filtds(id_tdi) {
	document.getElementById("txt_buscar").value = '';
	var tdp_value = document.getElementById(id_tdi).value.toUpperCase();
	var pos_td = id_tdi.substr(3,1);
	if(tdp_value != ''){
		tdp[pos_td] = 'td';
		tdv[pos_td] = tdp_value;
		Filtrar1();
	}else{
		tdp[pos_td] = '';
		tdv[pos_td] = '';
		if (document.getElementById('td_1').value.length == 0 &&  document.getElementById('td_2').value.length == 0 && 
			document.getElementById('td_3').value.length == 0 &&  document.getElementById('td_4').value.length == 0){
			Listat = Lista;
			Crgrlst();
		}else{
			Filtrar1();
		}
	} 
}


function Filtrar1() {
	var esta = true;
	Listat = [];
	for (var i = 0; i < Lista.length; i++) {
	 	tdl = Lista[i];	 	
	 	for (var j = 0; j < tdp.length; j++) {
	 		if (tdp[j] == 'td') {
	 			if((tdl[j].toUpperCase().indexOf(tdv[j]) > -1) && esta == true )
	 			{ 		esta = true; }
	 			else{	esta = false; }
	 		}
	 	} 
	 	if (esta) { Listat.push(tdl); }
	 	else{esta = true;}
	}
	Crgrlst();
}



function Crgrlst(){
	if(Listat){
		var subA = [];	
		var bodyt = document.getElementById("tabla1");
		var fila = '';
		bodyt.innerHTML='';

		for(var i = 0; i<=Listat.length ; i++){
			subA = Listat[i];
			fila = '<tr><td class="td1">'+subA[0]+'</td>'+
						'<td class="td2" id="9000'+subA[0]+'" onclick="Copiar(9000'+subA[0]+')">'+subA[1]+'</td>'+						
						'<td class="td3" id="8000'+subA[0]+'" onclick="Copiar(8000'+subA[0]+')">'+subA[2]+'</td><td></td>'+						
						'<td class="td4" id="7000'+subA[0]+'" onclick="Copiar(7000'+subA[0]+')">'+subA[3]+'</td><td></td>'+							
						'<td class="td5" id="6000'+subA[0]+'" onclick="Copiar(6000'+subA[0]+')">'+subA[4]+'</td><td></td>'+
						'<td class="td6" onclick="CopiarT('+subA[0]+')"><img src="img/cop1.png" height="17px" width="auto" alt="copy"></td>'+
					'</tr>';
			var btn = document.createElement("TR");
			btn.innerHTML=fila;
			document.getElementById("tabla1").appendChild(btn);
		}
		console.log(fila);
	}
	else{
		alert("NO LLEGÓ LA LISTA!!");
	}
}



function CargarAnimacion(){
	var elem = document.getElementById('animated');
	elem.classList.remove("animated");
	elem.classList.add("slideInUp");
}











function Filtrar() {
	document.getElementById('td_1').value = '';
	document.getElementById('td_2').value = '';
	document.getElementById('td_3').value = '';
	document.getElementById('td_4').value = '';
	var  input = document.getElementById("txt_buscar").value.toUpperCase();
	var esta = false;
	Listat = [];
	for (var i = 0; i < Lista.length; i++) {
	 	tdl = Lista[i];	 	
	 	for (var j = 0; j < tdl.length; j++) {
 			if(tdl[j].toUpperCase().indexOf(input) > -1){
 				esta = true;
 			}
	 	}
	 	if (esta) {Listat.push(tdl); esta = false;}
	}
	Crgrlst();
}

/*   -------------- C O P Y ---------------------- */


var elem_alrt = document.getElementById('alerta');
var tem_alrt;

function Copiar(e){

	var enlace = document.getElementById(e);
	var inputFalso = document.createElement('input');
	inputFalso.setAttribute("value",enlace.innerHTML);	
	document.body.appendChild(inputFalso);
	inputFalso.select();	
	document.execCommand('copy');
	document.body.removeChild(inputFalso);
	AlertaC(enlace.innerHTML);
}

function CopiarT(e){
	var alp = "9000"+e, py = "8000"+e, jf = "7000"+e, cl = "6000"+e;
	var alp1 = document.getElementById(alp);
	var py1 = document.getElementById(py);
	var jf1 = document.getElementById(jf);
	var cl1 = document.getElementById(cl);
	var str = alp1.innerHTML+" - "+py1.innerHTML+" "+jf1.innerHTML+cl1.innerHTML;
	var inputFalso = document.createElement('input');
	inputFalso.setAttribute("value",str);
	document.body.appendChild(inputFalso);
	inputFalso.select();	
	document.execCommand('copy');
	document.body.removeChild(inputFalso);
	AlertaC(str);
}

function AlertaC(e){
	document.getElementById('txta').innerHTML= '<img src="img/cop1.png" height="17px" width="auto" alt="copy" class="text-left">  '+e;
	elem_alrt.classList.remove("alerta_v");
	elem_alrt.classList.add("alerta");
	clearTimeout(tem_alrt);
	tem_alrt = setTimeout(AlertaD, 4000);
}

function AlertaD(){
	elem_alrt.classList.remove("alerta");
	elem_alrt.classList.add("alerta_v");
}