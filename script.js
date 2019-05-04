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
    var text = document.querySelector('p');
    var button = document.querySelector('button');

    // decide which color to switch to
    if (color === 'dark') {
        body.style.backgroundColor = '#000';
        text.style.color = '#fff';
        button.innerHTML = '(light version)';
    } else {
        body.style.backgroundColor = '#fff';
        text.style.color = '#000';
        button.innerHTML = '(dark version)';
    }
}

function toggleDark() {
    var body = document.body;
    var text = document.querySelector('p');
    var button = document.querySelector('button');

    // first time loading js thinks backgroundcolor not set
    if (!body.style.backgroundColor) {
        body.style.backgroundColor = '#fff';
    }

    // decide which color to switch to
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#000';
        text.style.color = '#fff';
        button.innerHTML = '(light version)';
    } else {
        body.style.backgroundColor = '#fff';
        text.style.color = '#000';
        button.innerHTML = '(dark version)';
    }
}
