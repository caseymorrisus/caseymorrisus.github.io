(function(){
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