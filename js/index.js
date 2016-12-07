$(function(){
    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': true,
       	navigationTooltips:["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
       	afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('.title-f').delay(500).animate({
					left: '20px',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section2').find('.obj').delay(500).animate({
					right: '20px',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('.title-f').delay(500).animate({
					left: '20px',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section3').find('.obj2').delay(500).animate({
					right: '20px',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('.title3').delay(500).animate({
					left: '82px',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section4').find('.obj4').delay(500).animate({
					right: '80px',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('.title-f').delay(500).animate({
					left: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section2').find('.obj').delay(500).animate({
					right: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('.title-f').delay(500).animate({
					left: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section3').find('.obj2').delay(500).animate({
					right: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('.title3').delay(500).animate({
					left: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
				$('.section4').find('.obj4').delay(500).animate({
					right: '-120%',
					opacity:1
				}, 1500, 'easeOutExpo');
			}
		}
    });
    $('.next').click(function(){
    	$.fn.fullpage.moveSectionDown()
    })
});