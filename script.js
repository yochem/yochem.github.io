function toggleDark() {
    var body = document.body;
    var text = document.querySelector('div');
    var button = document.querySelector('button');

    // first time loading js thinks backgroundcolor not set
    if (!body.style.backgroundColor) {
        body.style.backgroundColor = '#fff';
    }

    // decide which color to switch to
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#1c1c1c';
        text.style.color = '#fff';
        button.innerHTML = '(<u>Light version</u>)';
    } else {
        body.style.backgroundColor = '#fff';
        text.style.color = '#1c1c1c';
        button.innerHTML = '(<u>Dark version</u>)';
    }
}
