$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});


var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 	var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});

// Section 2

$('section.awSlider2 .carousel').carousel({
	pause: "hover",
  interval: 2000
});
var startImage2 = $('section.awSlider2 .item.active > img').attr('src');
$('section.awSlider2').append('<img src="' + startImage2 + '">');

$('section.awSlider2 .carousel').on('slid.bs.carousel', function () {
	var bscn2 = $(this).find('.item.active > img').attr('src');
	$('section.awSlider2 > img').attr('src',bscn2);
   });


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/