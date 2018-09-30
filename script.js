$(function() {

 	let appv = navigator.appVersion;
 	var firsthalve = appv.split(";").shift();
 	var lasthalve = firsthalve.split(" (").pop();
 	$('.prompt').html('yochem@' + lasthalve + ' ~ $ ');

	// Initialize a new terminal object
 	var term = new Terminal('#input-line .cmdline', '#container output');
 	term.init();




 	term.ascii()
 	//term.startascii();
 	//term.ascii();
 	//term.stopascii();
});
