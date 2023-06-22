(function setupDarkMode() {
	const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
	darkModePreference.addEventListener("change", e => setDarkMode(e.matches));

	const storedDarkMode = localStorage.getItem('dark-mode');
	if (!!storedDarkMode) {
		// convert from string to bool
		let prefersDarkMode = storedDarkMode === 'true';
		setDarkMode(prefersDarkMode);
		return;
	}

	if (darkModePreference.matches) {
		setDarkMode(true);
	}

})();

function setDarkMode(dark) {
	const html = document.getElementsByTagName('html')[0];
	const themeColor = document.querySelector("meta[name='theme-color']")

	if (dark) {
		html.classList.add('dark');
        themeColor.setAttribute("content", '#1b1b1b');
	} else {
		html.classList.remove('dark');
        themeColor.setAttribute("content", 'grey');

	}
	localStorage.setItem('dark-mode', dark);
}


function toggleDarkMode() {
	const html = document.getElementsByTagName('html')[0];
	const isDarkModeEnabled = html.classList.contains('dark');
	setDarkMode(!isDarkModeEnabled);
}
