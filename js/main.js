$(function(){
	
	var alto = $(window).height();
	var ancho = $(window).width();
	var radio = ancho/4;
	var numElementos  =5;

	var crearCirculo = function (id,posx,posy,radio) {

		var html= "<div id="+id+" class='circulo'>"
		html+=" <div class='circulo-relleno'>"
		html+="</div></div>";

		$(".contenedor").append(html);

		$("#"+id).css("left",posx);
		$("#"+id).css("top",posy);

		$("#"+id).find(".circulo-relleno").css("left",-1*radio+"px");
		$("#"+id).find(".circulo-relleno").css("top",-1*radio+"px");
		$("#"+id).find(".circulo-relleno").css("width",2*radio+"px");
		$("#"+id).find(".circulo-relleno").css("height",2*radio+"px");
		$("#"+id).find(".circulo-relleno").css("border-radius",radio+"px");

		

		$("#"+id).click(function(event,id) {
			
			ingresarNivel($(this).attr("id"))
		});

		return id;

	}

	var ingresarNivel = function (id) {
		console.log(id)
		animacion1(id);
		animacion2();
		animacion3(id);
	}

	var animacion1 = function (id) {
		$("#"+id).animate({
			left: 0,
			top: 0
		});
	}

	var animacion2 = function (argument) {
		$("#c0").animate({left:-1*ancho/2, top: -1*alto/2})

		$("#c0").find(".circulo-relleno").animate({width:radio*1.5,height:radio*1.5,borderRadius:radio*1.5,top:radio*-1.5/2,left:radio*-1.5/2});
		//$("#c0").animate({left:-1*ancho/2, top: -1*alto/2})
	}

	var animacion3 = function (id) {
		
		for(var i=0; i<numElementos;i++){
			if(i!=parseInt(id)){

				var posxActual = $("#"+i).position().left;
				var posyActual = $("#"+i).position().top;

				console.log(posxActual)

				$("#"+i).animate({
					left: posxActual*3,
					top: posyActual*3
				});
			}

		}
		
	}
	
	var ubicarElementos = function (num,r2) {
		var grados = 360 / num;

		for (var i = 0; i < num ; i++) {
			var angulo = 90 - i*grados;
			var posx = radio* Math.cos(Math.PI*(angulo/180));
			var posy = -radio* Math.sin(Math.PI*(angulo/180));

			crearCirculo(i,posx,posy,r2);
		}
	}

	var ubicarElementoCentral = function (radio) {
		var id = crearCirculo("c0",0,0,radio);	
	}


	

	var mostrarRedActual = function (argument) {
		var radio = 40
		ubicarElementos(numElementos,radio);
		ubicarElementoCentral(radio*1.2);
	} 
	
	mostrarRedActual();

})