$(document).ready(function() {
	$('.link').click(function (event) {
		disp(this);
		var changetitle = $(this).find('h4').text();
		document.title = changetitle;	
	});

	$('.navlink').click(function(el) {
		disp(this)(function() {
			disp(this);
		});
		var changenav = $(this).find('span,h2').text();
		document.title = changenav;
	}); 
});

function disp(element) {
	var source = $(element).attr('data-url'); 
	$('#content').load(source+" #content");
	history.pushState('', '', source);
};


/*$.getScript("http://server.example.com/Users/192.168.73.96?callback=parseResponse"); */