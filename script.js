$('.two').hide();
$('.free').hide();
$('.foo').hide();
$('.five').hide();
$('#one').addClass('color');

var click = 0;
$("#strelTwo").on('click',function(){
	click++;
	
	
	if(click ==0){
		
		$('.two').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').hide();
		$('.one').show();
		$('#one').addClass('color');
		
		
	}
	if(click ==1){
		
		var opas = 1;
		var elems = document.getElementsByClassName('two');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		
		document.getElementById('oneSlid1').style.opacity = opas 
		var set = setInterval(function(){
			
			
			var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {

				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
					
			$('.two').show();
			$('.one').hide();
			$('#two').addClass('color');
			$('#one').removeClass('color');
			
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
		
		
		
	}
	if(click ==2){
			var opas = 1;
		var elems = document.getElementsByClassName('free');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('two');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
					
		$('.two').hide();
		$('.one').hide();
		$('.free').show();
		$('#free').addClass('color');
		$('#two').removeClass('color');
		
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==3){
			var opas = 1;
			var elems = document.getElementsByClassName('foo');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('free');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		
		
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').show();
		$('#foo').addClass('color');
		$('#free').removeClass('color');
		
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==4){
		var opas = 1;
		var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('foo');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		
		
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').show();
		$('#five').addClass('color');
		$('#foo').removeClass('color');
		
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==5){
		
		var opas = 1;
		
		
		var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		
		click =0;
		$('.two').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').hide();
		$('.one').show();
		$('#one').addClass('color');
		$('#five').removeClass('color');
		
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
		
	}
	
})




$("#strelOne").on('click',function(){
	click--;
		if(click ==0){
			
		var opas = 1;
		var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('two');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
			
		$('.two').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').hide();
		$('.one').show();
		$('#one').addClass('color');
		$('#two').removeClass('color');
		$('#five').removeClass('color');
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
		
		
	}
	if(click ==1){
		
			var opas = 1;
		var elems = document.getElementsByClassName('two');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('free');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		
		
		
		$('.two').show();
		$('.one').hide();
		$('.five').hide();
		$('.foo').hide();
		$('.free').hide();
		$('#two').addClass('color');
		$('#one').removeClass('color');
		$('#foo').removeClass('color');
		$('#five').removeClass('color');
		$('#free').removeClass('color');
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
		
	
	}
	if(click ==2){
		var opas = 1;
		var elems = document.getElementsByClassName('free');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('foo');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		$('.two').hide();
		$('.one').hide();
		$('.five').hide();
		$('.foo').hide();
		$('.free').show();
		$('#free').addClass('color');
		$('#foo').removeClass('color');
		$('#five').removeClass('color');
		$('#two').removeClass('color');
			setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==3){
				var opas = 1;
		var elems = document.getElementsByClassName('foo');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').show();
		$('.five').hide();
		$('#foo').addClass('color');
		$('#five').removeClass('color');
		$('#free').removeClass('color');
		$('#two').removeClass('color');
		$('#one').removeClass('color');
		
		setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==4){
		var opas = 1;
		var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').show();
		$('#five').addClass('color');
		$('#foo').removeClass('color');
		$('#free').removeClass('color');
		$('#two').removeClass('color');
		$('#one').removeClass('color');
		setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
	}
	if(click ==-1){
		
		click =4;
		var opas = 1;
		var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		var set = setInterval(function(){
			var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {
				opas-=0.2;
				elems[i].style.opacity = opas 
				if(opas<=0){
					opas = 0;
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').show();
		$('#five').addClass('color');
		$('#foo').removeClass('color');
		$('#one').removeClass('color');
		setTimeout(function(){
			clearInterval(set);})
			opas = 1;
			elems[i].style.opacity = opas 
				}
			 }
		},100)
		
	}
	
})
$("#one").on('click',function(){
	click =0;
	var opas = 1;
	var elems = document.getElementsByClassName('one');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		$('.two').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').hide();
		$('.one').show();
		$('#one').addClass('color');
		$('#two').removeClass('color');
		$('#free').removeClass('color');
		$('#foo').removeClass('color');
		$('#five').removeClass('color');
})
$("#two").on('click',function(){
	click =1;
	var opas = 1;
	var elems = document.getElementsByClassName('two');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		$('.two').show();
		$('.one').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').hide();
		$('#two').addClass('color');
		$('#one').removeClass('color');
		$('#free').removeClass('color');
		$('#foo').removeClass('color');
		$('#five').removeClass('color');
})
$("#free").on('click',function(){
	click =2;
	var opas = 1;
	var elems = document.getElementsByClassName('free');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		$('.two').hide();
		$('.one').hide();
		$('.free').show();
		$('.foo').hide();
		$('.five').hide();
		$('#free').addClass('color');
		$('#one').removeClass('color');
		$('#two').removeClass('color');
		$('#foo').removeClass('color');
		$('#five').removeClass('color');
})
$("#foo").on('click',function(){
	var opas = 1;
	click =3;
	var elems = document.getElementsByClassName('foo');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').show();
		$('.five').hide();
		$('#foo').addClass('color');
		$('#one').removeClass('color');
		$('#two').removeClass('color');
		$('#free').removeClass('color');
		$('#five').removeClass('color');
})
$("#five").on('click',function(){
	var opas = 1;
	click =4;
	var elems = document.getElementsByClassName('five');
			 for(i=0; i < elems.length; i++) {
				 elems[i].style.opacity = opas;
			 }
		$('.two').hide();
		$('.one').hide();
		$('.free').hide();
		$('.foo').hide();
		$('.five').show();
		$('#five').addClass('color');
		$('#one').removeClass('color');
		$('#two').removeClass('color');
		$('#free').removeClass('color');
		$('#foo').removeClass('color');
})



var brend = new Array();
brend[0] = document.getElementById('brend1').innerHTML = 'BRANDED SHOES1';
brend[1] = document.getElementById('brend2').innerHTML = 'BRANDED SHOES2';
brend[2] = document.getElementById('brend3').innerHTML = 'BRANDED SHOES3';
brend[3] = document.getElementById('brend4').innerHTML = 'BRANDED SHOES4';
brend[4] = document.getElementById('brend5').innerHTML = 'BRANDED SHOES5';
brend[5] = document.getElementById('brend6').innerHTML = 'BRANDED SHOES6';


switch(brend[0]){
		case 'BRANDED SHOES1':
			document.getElementById('cena1').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena1').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena1').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena1').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena1').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena1').innerHTML = '700$'
		break;
}
switch(brend[1]){
		case 'BRANDED SHOES1':
			document.getElementById('cena2').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena2').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena2').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena2').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena2').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena2').innerHTML = '700$'
		break;
}
switch(brend[2]){
		case 'BRANDED SHOES1':
			document.getElementById('cena3').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena3').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena3').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena3').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena3').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena3').innerHTML = '700$'
		break;
}
switch(brend[3]){
		case 'BRANDED SHOES1':
			document.getElementById('cena4').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena4').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena4').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena4').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena4').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena4').innerHTML = '700$'
		break;
}
switch(brend[4]){
		case 'BRANDED SHOES1':
			document.getElementById('cena5').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena5').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena5').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena5').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena5').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena5').innerHTML = '700$'
		break;
}
switch(brend[5]){
		case 'BRANDED SHOES1':
			document.getElementById('cena6').innerHTML = '300$'
		break;
		case 'BRANDED SHOES2':
			document.getElementById('cena6').innerHTML = '400$'
		break;
		case 'BRANDED SHOES3':
			document.getElementById('cena6').innerHTML = '500$'
		break;
		case 'BRANDED SHOES4':
			document.getElementById('cena6').innerHTML = '500$'
		break;
		case 'BRANDED SHOES5':
			document.getElementById('cena6').innerHTML = '600$'
		break;
		case 'BRANDED SHOES6':
			document.getElementById('cena6').innerHTML = '700$'
		break;
}











































