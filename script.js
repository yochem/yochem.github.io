function detectColorMode() {
    // detect which color mode is set. Currently only works with Safari
    matcher = window.matchMedia('(prefers-color-scheme: dark)');
    matcher.addListener(onUpdate);
    onUpdate();
}

function onUpdate() {
    // check which color is prefered by the browser
    if (matcher.matches) {
        setColorMode('dark');
    } else {
        setColorMode('light');
    }
}

function setColorMode(color) {
    var body = document.body;
    var text = document.querySelector('div');
    var button = document.querySelector('button');

    var darkColor = '#1c1c1c';
    var white = '#fff';

    if (color === 'dark') {
        body.style.backgroundColor = darkColor;
        text.style.color = white;
        button.innerHTML = '(<u>light version</u>)';
    } else {
        body.style.backgroundColor = white;
        text.style.color = darkColor;
        button.innerHTML = '(<u>dark version</u>)';
    }
}

function toggleDark() {
    var body = document.body;

    // decide which color to switch to
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        setColorMode('dark');
    } else {
        setColorMode('light');
    }
}
