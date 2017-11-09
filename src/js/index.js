require.config({
	paths:{
		'jquery':'../libs/jquery',
		'swiper':'../libs/swiper.min',
		'jqueryMin':'../libs/jquery.min',
	}
});
require(['jquery','swiper','jqueryMin'],function($,swiper,jqueryMin){
	$(function(){
		// 下面固定定位的
		var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		$('.form-left a').on('click',function(){
			var str = $(this).prev('input').val();
			var bol = reg.test(str);
			if(bol){
				$('.downtip').css('display','block');
				$('.downtip .downtip-bol').addClass('downtip-true');
				$('.downtip span').text('下载链接短信已发送');
			}else if(str == ''){
				$('.downtip').css('display','block');
				$('.downtip .downtip-bol').addClass('downtip-false');
				$('.downtip span').text('请输入手机号');
			}else{
				$('.downtip').css('display','block');
				$('.downtip .downtip-bol').addClass('downtip-false');
				$('.downtip span').text('下载链接短信发送失败');
			}
		})
		$('.fin-right i').on('click',function(){
			$(this).parent().css({left:'-100%',transitionDuration:'1s',transitionDelay:'0s'}).prev().css({left:'0px',transitionDuration:'1s',transitionDelay:'1s'})
		});
		$('.fin-left').on('click',function(){
			$(this).css({left:'-220px',transitionDuration:'1s',transitionDelay:'0s'}).next().css({left:'0%',transitionDuration:'1s',transitionDelay:'1s'})
		});
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
		// 右边固定定位点击事件
		$('.p1').on('click',function(){
			$(this).css('display','none')
			$('.p2').css('display','block');
			$('.p3').css('display','block');
			$('.fxd').css({
				'width':'42px',
				'height':'300px',
			});
		});
		$('.p2').on('click',function(){
			$('.p1').css('display','block');
			$(this).css('display','none');
			$('.p3').css('display','none');
			$('.fxd').css({
				'width':'42px',
				'height':'100%',
			});
		});
		// 底部的展开事件
		$('.soarea-btn').on('click',function(){
			$(this).toggleClass('active');
			$(this).parent().next('ul').stop().slideToggle();
		});
		// 轮播图旁边的tab切换
		$('.global-left p').on('click',function(){
			$(this).css({background:'#fff',color:'#f60'}).siblings().css({background:'#465259',color:'#fff'});
			switch($(this).index()){
				case 0:
					$(this).find('i').toggleClass('pw1');
					break;
				case 1:
					$(this).find('i').toggleClass('pw2');
					break;
				case 2:
					$(this).find('i').toggleClass('pw3');
					break;
				case 3:
					$(this).find('i').toggleClass('pw4');
					break;
			}
			$('.global-right .global-box').eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		addFn('.global-box1-top p span','.global-box1-top i','.global-box1-bottom div');
		addFn('.global-box2-top p span','.global-box2-top i','.global-box2-bottom div');
		addFn('.global-box3-top p span','.global-box3-top i','.global-box3-bottom .box3-bottom');
		function addFn(obj,obj1,obj2){
			$(obj).on('click',function(){
				$(this).css('color','#f60').siblings().css('color','#666');
				$(obj1).eq($(this).index()).css('display','block').siblings().css('display','none');
				$(obj2).eq($(this).index()).css('display','block').siblings('div').css('display','none');
			});
		}
		$('.i2').on('click',function(){
			$(this).css('backgroundPosition','-1px -166px').siblings().css('backgroundPosition',' 0 -140px');;
		});
		// 返回顶部
		$('.tok').on('click',function(){
			$('html,body').stop().animate({scrollTop:'0px'});
		});
		// 中部图片下面的tab切换
		$('.main2-center span').on('mouseenter',function(){
			$(this).addClass('spn1').siblings().removeClass('spn1');
		});
		// 轮播图下面的跑马灯
		(function($) {
		    $.fn.newsticker = function(opts) {
		        // default configuration
		        var config = $.extend({}, {
		            height: 40,
		            speed: 800,
		            start: 0,
		            interval: 3000,
		            move: null
		        }, opts);
		        // main function
		        function init(obj) {
		            var $newsticker = obj,
		                $frame = $newsticker.find('.notice-left','.notice-right'),
		                $item = $frame.find('.notice-left-top','.notice-right-top'),
		                $next,
		                stop = false;
		            function init(){
		                $item.eq(0).addClass('current'); //set start item
		                suspend();
		                move();
		            };
		            function suspend(){
		                $newsticker.on('mouseover mouseout', function(e) {
		                    if (e.type == 'mouseover') {
		                        stop = true;
		                    } else { //mouseout
		                        stop = false;
		                    }
		                }); 
		            };

		            function move(){
		                if($.isFunction(config.move)){
		                    config.move.call(this);
		                }
		                else{
		                    setInterval(function() {
		                        if (!stop) {
		                            var $current = $frame.find('.current');

		                            $frame.animate({
		                                top: '-=' + config.height + 'px'
		                            }, config.speed, function() {
		                                $next = $frame.find('.current').next();
		                                $next.addClass('current');
		                                $current.removeClass('current');
		                                $current.clone().appendTo($frame);
		                                $current.remove();
		                                $frame.css('top', config.start + 'px');
		                            });
		                        }
		                    }, config.interval);
		                };
		            };
		            init();
		        }
		        // initialize every element
		        this.each(function() {
		            init($(this));
		        });
		        return this;
		    };
		    // start
		    $(function() {
		        $('.notice-box').newsticker();
		    });
		})(jQuery);
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
		autoplayDisableOnInteraction : false,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	});         
});