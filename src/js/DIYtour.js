require.config({
	paths:{
		'jquery':'../libs/jquery',
		'jqueryMin':'../libs/jquery.min',
	}
});
require(['jquery','jqueryMin'],function($,jqueryMin){
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
	});
});