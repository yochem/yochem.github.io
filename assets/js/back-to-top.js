const browserHeight = document.documentElement.clientHeight;
const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;

if (bodyHeight > browserHeight) {
	document.getElementById('totop').style.display = 'initial';
}
