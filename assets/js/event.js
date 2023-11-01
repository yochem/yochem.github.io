const params = new URLSearchParams(window.location.search);

var cal = ics();

var subject = params.get('subject');
var description = (params.get('description') || "") + "\nProgrammatically created by yochem.nl";
var loc = params.get('location') || "";
var begin = params.get('begin');
var end = params.get('end');

if (!subject || !begin) {
	console.error('cal: subject or begin time missing');
	window.location = "/404";
}

cal.addEvent(subject, description, location, begin, end);

var filename = subject.replace(' ', '-').toLowerCase();
cal.download(filename);
