window.onload=myFunction();
function myFunction() {


var liczba=new Array(5);
liczba[0]=new Array(8);
liczba[0]=["","","","",'<img src="img/kula.jpg" alt="kula"/>',"","","",""];
liczba[1]=new Array(8);
liczba[1]=["","","",'<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>',"","",""];
liczba[2]=new Array(8);
liczba[2]=['<img src="img/kula.jpg" alt="kula"/>',"","","",'<img src="img/kula.jpg" alt="kula"/>',"","","",'<img src="img/kula.jpg" alt="kula"/>'];
liczba[3]=new Array(8);
liczba[3]=['<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>',"","","",'<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>'];
liczba[4]=new Array(8);
liczba[4]=['<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>'];
liczba[5]=new Array(8);
liczba[5]=['<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>','<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>','<img src="img/kula.jpg" alt="kula"/>',"",'<img src="img/kula.jpg" alt="kula"/>'];
		
		var tresc_diva="";
		var j=Math.floor(Math.random()*6);
		liczba=liczba[j];
		var tressc_cuba="";
		
		
	
	for(i=0;i<=8;i++){
	element="licz"+i;
	/*alert(liczba[i]);*/
	tresc_diva = tresc_diva + '<div class="kropka" id="'+element+'">'+liczba[i]+'</div>';
		/*if(i==2||i==5)tresc_diva=tresc_diva+'<div style="clear:both;"></div>';*/
	
	}
	document.getElementById("kropka").innerHTML=tresc_diva;
	/*alert(tresc_diva);*/
	
	
	
	
	
	
	
	const time = setInterval(myFunction,50) 
	setTimeout(stop,100);
	const stop = function () {
    clearInterval(time);
}
	
/*const losowanie = function () {
    id = setInterval(myFunction, 10)
    setTimeout(btnrf, 100)
}

const btnrf = function () {
    clearInterval(id);
}*/
	
}	



