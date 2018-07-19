//公共头
document.writeln('<div class="header_bg">');
document.writeln('<div class="father">');
document.writeln('<div class="logo_info">');
document.writeln('<img class="fl jianguan_logo" src="../images/jianguan_logo.png" alt="" />');
document.writeln('<div class="jianguan_info fr">');
document.writeln('<img class="avatar" src="../images/avatar.png" alt="" />');
document.writeln('<span class="chengyunshang_name">承运商名字</span>');
document.writeln('<span class="shu_line"></span>');
document.writeln('<span class="logout">退出</span>');
document.writeln('</div>');
document.writeln('</div>');

document.writeln('<ul class="title_ul clearfix">');
document.writeln('<li style="width: 235px;"><a href="##"><img src="../images/title1.png" alt="" />首页</a></li>');
document.writeln('<li><a href="##"><img src="../images/title2.png" alt="" />企业管理</a></li>');
document.writeln('<li><a href="##"><img src="../images/title3.png" alt="" />车辆管理</a></li>');
document.writeln('<li><a href="##"><img src="../images/title4.png" alt="" />监管统计</a></li>');
document.writeln('<li class="tilte_current"><a href="##"><img src="../images/title55.png" alt="" />监管分析</a></li>');
document.writeln('</ul>');

document.writeln('</div>');
document.writeln('</div>');


$(document).on('click', '.title_ul li', function() {
	var index = $(this).index() + 1;
	$('.title_ul li').removeClass('tilte_current');
	// $('.title_ul li').find('img').attr('src', '../images/title'+index+'.png');
	$(this).addClass('tilte_current');
	
	$(this).find('img').attr('src', '../images/title'+index+index+'.png');

	
});