require.config({
	paths:{
		'jquery':'../libs/jquery',
		'swiper':'../libs/swiper.min',
	}
});
require(['jquery','swiper'],function($,swiper){
	$(function(){
		// 搜索框显示隐藏
		$('.search span').hover(function() {
			$(this).find('div').stop().fadeIn(300);
		}, function() {
			$(this).find('div').stop().fadeOut(300);
		});
		$('.drop-down p').on('click',function(){
			$(this).parent().parent().find('b').html($(this).html());
			$(this).parent().css('display','none')
		});
		// nav下面显示隐藏
		$('.a6').hover(function() {
			$(this).find('div').stop().fadeIn(300);
		}, function() {
			$(this).find('div').stop().fadeOut(300);
		});
		$('.toui p').on('mouseenter',function(){
			$(this).addClass('p1').siblings().removeClass('p1');
		});
		$('.tou p').on('mouseenter',function(){
			$(this).addClass('p2').siblings().removeClass('p2');
		});
		$('.tous p').on('mouseenter',function(){
			$(this).addClass('p3').siblings().removeClass('p3');
		});
		$('.main-top-box .p4').on('mouseenter',function(){
			$('.main-wrap .center1').css('opacity','1').siblings('.center2').css('opacity','0');
		});
		$('.main-top-box .p5').on('mouseenter',function(){
			$('.main-wrap .center2').css('opacity','1').siblings('.center1').css('opacity','0');
		});
		$('.main-top2-center span').on('mouseenter',function() {
			$(this).addClass('spn').siblings().removeClass('spn');
			$('.main-wrap1').children().eq($(this).index()).css('opacity','1').siblings().css('opacity','0');
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
	});
});