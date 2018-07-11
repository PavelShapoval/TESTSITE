$('document').ready(function(){
	
/*	$('.topnav__item').css('border', '1px solid black');
		$('.sub1').css('border', '1px solid black');*/
	



/*-------------------Эффекты для меню----------------------------------------------------------*/

	$('.topnav__item').hover(function(){

		$(this).children('ul').stop(false, true).fadeIn(300);

	}, 
	function(){

		$(this).children('ul').stop(false, true).fadeOut(300);

	});

/*-----------------------------------------------------------------------------*/
	$('.sub > li').hover(function(){

		$(this).css("padding-left", "8px");

	}, 
	function(){

		$(this).css("padding-left", "0px");

	});




});

/*-----------------------------------------------------------------------------*/
			/*эффекты для фильтра*/

$('document').ready(function(){

	

	$('.filter > ul > li:nth-child(1)').click(function(){
		$('.filter > ul > li:nth-child(1)').css('background', '#918686');
	});

	$('.filter > ul > li:nth-child(2)').click(function(){
		$('.filter > ul > li:nth-child(2)').css('background', '#918686');
	})

	$('.filter > ul > li:nth-child(3)').click(function(){
		$('.filter > ul > li:nth-child(3)').css('background', '#918686');
	})

	$('.filter > ul > li:nth-child(4)').click(function(){
		$('.filter > ul > li:nth-child(4)').css('background', '#918686');
	})


});



$('document').ready(function(){



/*-----------------------------------------------------------------------------*/

	$('.food-cardsitem1, .food-cardsitem2, .food-cardsitem3, .food-cardsitem4, .food-cardsitem5, .food-cardsitem6, .food-cardsitem7, .food-cardsitem8').hover(function(){

		$(this).find('.food-cardsitem__title, .food-cardsitem__desc, .food-cardsitem__customer, .food-cardsitem__star, .food-cardsitem__price').css({
			"color":"#fff"
		});

	}, 
	function(){

		$(this).find('.food-cardsitem__title, .food-cardsitem__desc, .food-cardsitem__customer, .food-cardsitem__star, .food-cardsitem__price').css({
			"color":"#918686"
		});

	});

/*-------------------------------------------------------------------------------*/


	$('.food-cardsitem1, .food-cardsitem2, .food-cardsitem3, .food-cardsitem4, .food-cardsitem5, .food-cardsitem6, .food-cardsitem7, .food-cardsitem8').hover(function(){

		$(this).find('.food-cardsitem__btn1').css({
			"border":"1px solid #fff",
			"color":"#fff"
		});

	}, 
	function(){

		$(this).find('.food-cardsitem__btn1').css({
			"border":"1px solid #918686",
			"color":"#918686"
		});

	});

/*-------------------------------------------------------------------------------*/

	$('.food-cardsitem1, .food-cardsitem2, .food-cardsitem3, .food-cardsitem4, .food-cardsitem5, .food-cardsitem6, .food-cardsitem7, .food-cardsitem8').hover(function(){

		$(this).find('.food-cardsitem__btn3').css({
			"background":"#fff",
			"color":"#918686"
		});

	}, 
	function(){

		$(this).find('.food-cardsitem__btn3').css({
			"background":"#c55842",
			"color":"#fff"
		});

	});



/*-------------------------------------------------------------------------------*/


	$('.food-cardsitem__btn1').hover(

		function(){
			$(this).css("color", "#c55842")

		}, function(){
			$(this).css("color", "#fff")

		}
		)

/*-------------------------------------------------------------------------------*/
		
		$('.topnav__item').hover(

	function(){

		$(this).addClass("topnav__item2");

	}, 
	function(){

		$(this).removeClass("topnav__item2");

	});


/*-------------------------------------------------------------------------------*/

	


});

