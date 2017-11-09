require.config({
	paths:{
		'jquery':'../libs/jquery',
	}
});
require(['jquery'],function($){
	$(function(){
		$('.main-top span').on('click',function(){
			$(this).find('b').css('display','block').parent().siblings().find('b').css('display','none');
			$('.main-bottom-box').eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		$('.main-bottom-box p input').focus(function(){
		 	$(this).css("border-color","#f60");
		});
		$('.main-bottom-box p input').blur(function(){
		 	$(this).css('border-color','#CDCDCD');
		});
	});
});