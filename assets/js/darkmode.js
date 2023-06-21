(function setupDarkMode() {
	const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
	darkModePreference.addEventListener("change", e => setDarkMode(e.matches));

	const storedDarkMode = localStorage.getItem('dark-mode');
	if (!!storedDarkMode) {
		// convert from string to bool
		setDarkMode(storedDarkMode === 'true');
		return;
	}

	if (darkModePreference.matches) {
		setDarkMode(true);
	}

	localStorage.setItem('dark-mode', darkModePreference.matches);
})();

function setDarkMode(dark) {
	const body = document.getElementsByTagName('body')[0];
	const img = document.getElementById('darkmode-toggle').children[0];
	const themeColor = document.querySelector("meta[name='theme-color']")

	if (dark) {
		img.setAttribute('src', '/sun.png');
		body.classList.add('dark');

        themeColor.setAttribute("content", '#1b1b1b');
	} else {
		img.setAttribute('src', '/moon.png');
		body.classList.remove('dark');

        themeColor.setAttribute("content", 'grey');

	}
	localStorage.setItem('dark-mode', dark);
}


function toggleDarkMode() {
	const body = document.getElementsByTagName('body')[0];
	const isDarkModeEnabled = body.classList.contains('dark');

	setDarkMode(!isDarkModeEnabled);
}
