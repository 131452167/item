require.config({
	paths:{
		'jquery':'../js/jquery',
		'swiper':'../js/swiper.min',
	}
});
require(['jquery','swiper'],function($,swiper){
	$(function(){
		$('.drop-down p').on('click',function(){
			$(this).parent().parent().find('b').html($(this).html());
			$(this).parent().css('display','none')
		});
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
		$('.u-re-top').on('click',function(){
			$('html,body').stop().animate({scrollTop:'0px'});
		});
		$(window).scroll(function(){
			if($(this).scrollTop() > 500){
				$('.u-re-top').css('display','block');
			}else{
				$('.u-re-top').css('display','none');
			}
		});
		$('.route-top span').on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.route-bottom').children().eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		$('.u-cruise-accordion ul li').mouseenter(function(){
			$(this).stop().animate({width:528},500).siblings().stop().animate({width:227},500);
		});
	});
  	var mySwiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay : 2000
    });
	var mySwiper = new Swiper ('.tacitly', {
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
		autoplayDisableOnInteraction : false,
	}); 
	
});