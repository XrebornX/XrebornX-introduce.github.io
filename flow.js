	var demoText = 'ok,it seems a little hard for a novice to find a job....';
	// var demoText = 'I';
	var i = 0;
	function show(word){
		var num = word.length;
		var shower = word.substr(0,i);
		document.getElementById('speak').innerHTML = shower;
		i++;
		if(i > num){
			clearInterval(timer);
			$('#speak').text('').css({
				'display': 'none',
			});
			finalWord(introducr1);
			finalWord(introducr2);
			finalWord(introducr3);
			finalWord(introducr4);
			finalWord(introducr5);
			finalWord(introducr7,'red',20);
			finalWord(introducr8,'red',20);
			$('#speak').css({
			'position': 'relative',
			'width': '80%',
			'margin-left': '10%',
			'margin-top': '26px'
		}).slideDown(2500);
		}
	}
	var timer = setInterval('show(demoText)',350);
	var introducr1 = '1：能使用常用的办公软件、PS 、AutoCAD等。';
	var introducr2 = '2：熟悉HTML语言，可以结合DIV+CSS对页面进行布局。';
	var introducr3 = '3：熟悉javascript、jquery，能够通过Ajax实现页面的局部更新和跨域信息的接收，了解session、cookie。';
	var introducr4 = '4：具备面向对象开发思想，能够使用TP3.2框架进行MVC模式的开发。';
	var introducr5 = '5：了解mysql、redis。';
	var introducr6 = '6：做过OA系统的权限管理功能、分页效果和微信小程序的布局，了解git的一些操作。';
	var introducr7 = '现希望能从事PHP或者web前端的工作，如果你觉得我可能合适你们公司的话，希望你能给我个尝试的机会，谢谢';
	var introducr8 = 'QQ：1787139672  　　  email：1787139672@qq.com';
	function finalWord(intr,col='#1A1A1A',ft=23){
		$('<span><span>').text(intr).css({
			'color': col,
			'display':' block',
			'font-size': ft+'px',
			'padding': '16px'
		}).appendTo('#speak');
	};
