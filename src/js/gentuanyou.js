require.config({
	paths:{
		'jquery':'../libs/jquery',
		'swiper':'../libs/swiper.min',
	}
});
require(['jquery','swiper'],function($,swiper){
	console.log($);
	console.log(swiper);
	$(function(){
		$('.a6').hover(function() {
			$(this).find('div').stop().fadeIn(300);
		}, function() {
			$(this).find('div').stop().fadeOut(300);
		});
		$('.search span').hover(function() {
			$(this).find('div').stop().fadeIn(300);
		}, function() {
			$(this).find('div').stop().fadeOut(300);
		});
		$('.drop-down p').on('click',function(){
			$(this).parent().parent().find('b').html($(this).html());
			$(this).parent().css('display','none')
		});
		$('.gp-nav-link').hover(function() {
			$(this).find('i').css('display','block');
			$(this).next().css('display','block');
		}, function() {
			$(this).find('i').css('display','none');
			$(this).next().css('display','none');
		});
	});
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    effect : 'fade',
		fade: {
		  crossFade: true,
		},
		pagination : '.swiper-pagination',
		paginationClickable :true,
		autoplay : 3000,
		speed:500,
		autoplayDisableOnInteraction : false
	    // 如果需要分页器
	    // pagination: '.swiper-pagination',
	    
	})
});