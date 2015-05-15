(function(){
	var width = $(document).width();
	var height = $(document).height();
	var container = $('body');

	function screenRatio() {
		if ( width > height ) {
			return 'width';
		} else {
			return 'height';
		}
	}

	


})();