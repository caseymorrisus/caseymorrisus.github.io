(function(){
	var width = $(document).width();
	var height = $(document).height();
	var container = $('body');
	var width = $(window).width();
	var height = $(window).height();
	var container = $('body');
	var top_section = $('.top-section');
	var passion_elm = $('header h4 span');
	var passions = ['Performance', 'Node', 'Electron', 'Preprocessors', 'Build Tools', 'JavaScript']
	var next_passion = 0;

	var switchingPassions = setInterval(function(){
		switchPassions();
	}, 4000);

	changeTopHeight();
	preloadImages();

	function preloadImages() {
		var imageSrc;

		if (width < 960) {
			imageSrc = '../img/bg-small.jpg';
		} else if (width >= 960 && width < 1250) {
			imageSrc = '../img/bg-medium.jpg';
		} else if (width >= 1250 && width < 3000) {
			imageSrc = '../img/bg-large.jpg';
		} else if (width >= 3000) {
			imageSrc = '../img/bg-xlarge.jpg';
		}

		$('<img/>').attr('src', imageSrc).load(function() {
			console.log('Hero image has loaded');
			$('.page-loader').fadeOut(500, function() {
				$('body').css('overflow', 'auto');
			});
		});

		if($('.nav').hasClass('dont-load')) {
			$('body').css('overflow', 'auto');
		}
	};


	

	function switchPassions(){
		passion_elm.animate({
			opacity: 0
		}, 500, function() {
			passion_elm.text(passions[next_passion]);
			passion_elm.animate({
				opacity: 1
			}, 500)
		});

		//passion_elm.text(passions[next_passion]);

		if (next_passion === passions.length - 1) {
			next_passion = 0;
		} else {
			next_passion += 1;
		}
	}

	function changeTopHeight(){
		top_section.css('height', height);
	};

	function screenRatio() {
		if ( width > height ) {
			return 'width';
		} else {
			return 'height';
		}
	}

	


})();