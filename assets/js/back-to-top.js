const browserHeight = document.documentElement.clientHeight;
const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;

if  (bodyHeight > browserHeight) {
	document.getElementsByTagName('nav')[0].insertAdjacentHTML(
		'afterbegin',
		'<a href="#">Top</a> |'
	)
}
