$(".bs-addUrl").click(function () {
	layer.open({
		type: 2,
		title: '添加链接',
		maxmin: true,

		shadeClose: true, //点击遮罩关闭层

		area: ['800px', '520px'],

		content: '/index.php?c=admin&page=add_link_tpl'

	});

});

$(".search-input").blur(function (data, status) {

	var keywords = $(".search-input").val();

	if (keywords == '') {

		$(".site-type").removeClass("hidden");

	}

});

$('#baidu').click(function () {

	var keywords = $(".search-input").val();

	var biyingUrl = 'https://www.bing.com/search?q=' + keywords;

	if (keywords == '') {

		window.open('https://cn.bing.com/?mkt=zh-cn');

	} else {

		window.open(biyingUrl);

	}

})

holmes({

	input: '.search-input',

	find: '.url-list',

	placeholder: '<div class="empty">未搜索到匹配结果！</div>',

	mark: false,

	hiddenAttr: true,

	class: {

		visible: 'visible',

		hidden: 'hidden'

	},

	instant: true,

	onHidden(el) { },

	onFound(el) {

		$(".site-type").addClass("hidden");

	},

	onInput(el) {

		$(".site-type").addClass("hidden");

	},

	onVisible(el) {

		$(".site-type").removeClass("hidden");

	},

	onEmpty(el) {

		$(".site-type").removeClass("hidden");

	}

});

$('a').click(function () {

	var target = $(this).attr('href');
	console.log(target);

	$('html, body').animate({

		scrollTop: $(target).offset().top - 90 //65位设置的偏移值

	}, 300);

	return false;

});
$('.scroll_top').click(function () { $('html,body').animate({ scrollTop: '0px' }, 500); });
$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
		$(".scroll_top").fadeIn(1000);
	} else {
		$(".scroll_top").stop(true, true).fadeOut(1000);
	}
});
$('.nav-bar').click(function () {
	$(this).find('i').toggleClass('fa-close');
	$(this).find('i').toggleClass('fa-bars');
	$('header').toggleClass('show');
});

//$('.theme').click(function() {
//	$('body').addClass('dark')
//	$.cookie('theme', 'dark', {
//		expires: 7,
//		path: '/'
//	});
//})
var theme = $.cookie('theme');
if (theme == 'dark') {
	$('body').addClass('dark')
} else {
	$('body').removeClass('dark');
}
$('.theme').click(function () {
	if ($.cookie('theme') == "" || $.cookie('theme') == null) {
		$('body').addClass('dark')
		$.cookie('theme', 'dark', {
			expires: 365,
			path: '/'
		});
		console.log('切换至深色模式')
	} else {
		$('body').removeClass('dark')
		$.removeCookie('theme', 'dark', {
			path: '/'
		});
		console.log('切换至浅色模式')
	}
})
