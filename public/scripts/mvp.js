$(document).ready(function(){
	$('#newpage').click(function(){
		$('.mission').remove();
		var title = $('#title');
		title.children().remove();
		title.append('<span style="font-size: 40px;" class="titleSpan"> Bar O\' Clock is still in the works.</span></br>' +
		' <span style="font-size: 40px;" class="titleSpan">We\'ll let you when it\'s ready!</span></br>'+
		' <span style="font-size: 40px;" class="titleSpan">Let us know what your email is, so we can contact you when it is.</span>');
		title.append('</br>');
		title.append('</br>');
		title.append('<iframe style="height: 300px;" src="https://docs.google.com/forms/d/1r18FEAY9a6Mu0CLwa4sRipcBmk9VsDkUOPSJwoGUrp0/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
		$('#second').click(function(){
			title.children().remove();
			title.append('<span style="font-size: 40px;" class="titleSpan"> Thanks! </span>');
		})
	});
	
});