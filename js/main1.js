
$(document).ready(function(){

	if ($(this).width() > 767) {

		$(window).scroll(function(){

			var barra = $(window).scrollTop();
			var posicion = barra * 0.20;
			var centro = posicion - 150;

			$('.main .texto2').css({
//                'background-attachment': 'fixed',
				'background-position': 'center -' + centro + 'px'
			});	
		});

	} else {

		$(window).scroll(function(){

			$('.main .texto2').css({
				'background-position': 'center'
			});
		});

	}

	$(window).resize(function(){

		if ($(this).width() > 767) {

			$(window).scroll(function(){	

				var barra = $(window).scrollTop();
				var posicion = barra * 0.20;
				var centro = posicion - 150;

				$('.main .texto2').css({

					'background-position': 'center -' + centro + 'px'
				});
				
			});

		} else {

			$(window).scroll(function(){

				$('.main .texto2').css({
                    
					'background-position': 'center'
				});
			});

		}

	});
})

$(document).ready(function(){
    
    /*-o-*/
    
    var width = $(this).width();
    
    if(width < 767){
        
        var enlaces = $('.menu-info .main');
        var icono = $('.boton #btn-menu');
        enlaces.hide();
        icono.addClass('fa-bars');
    }
    
    /*-o-*/

	if ($(this).width() > 767) {

		$(window).scroll(function(){

			var barra = $(window).scrollTop();
			var posicion = barra * 0.10;
			var centro = posicion - 150;

			$('.main .texto4').css({
//                'background-attachment': 'fixed',
				'background-position': 'center -' + centro + 'px'
			});	
		});

	} else {

		$(window).scroll(function(){

			$('.main .texto4').css({
				'background-position': 'center'
			});
		});

	}

	$(window).resize(function(){

		if ($(this).width() > 767) {

			$(window).scroll(function(){	

				var barra = $(window).scrollTop();
				var posicion = barra * 0.10;
				var centro = posicion - 150;

				$('.main .texto4').css({

					'background-position': 'center -' + centro + 'px'
				});
				
			});

		} else {

			$(window).scroll(function(){

				$('.main .texto4').css({

					'background-position': 'center'
				});
			});

		}

	});

	$('.boton').on('click', function(e){
        
        var enlaces = $('.menu-info .main');
        var icono = $('.boton #btn-menu');
        
        e.preventDefault();
		enlaces.slideToggle();
		icono.toggleClass('fa-bars');
		icono.toggleClass('fa-times');
	});

	$(window).on('resize', function(){
        
        var enlaces = $('.menu-info .main');
        var icono = $('.boton #btn-menu');

		if($(this).width() > 767){

			enlaces.show();
			icono.addClass('fa-times');
			icono.removeClass('fa-bars');
		}

		else{
			enlaces.hide();
			icono.addClass('fa-bars');
			icono.removeClass('fa-times');
		}
	});

	$(window).scroll(function(){
		var menu = $('.menu');
		var altura = $(window).scrollTop();

		if ($(this).scrollTop() > 1) {
			menu.addClass('fixed');
		}

		else{
			menu.removeClass('fixed');
		}
	});    
    
});