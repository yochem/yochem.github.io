function toggleDark() {
    var body = document.body;
    var text = document.querySelector('pre');
    var button = document.querySelector('button');

    // first time loading js thinks backgroundcolor not set
    if (!body.style.backgroundColor) {
        body.style.backgroundColor = '#fff';
    }

    // decide which color to switch to
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#000';
        text.style.color = '#fff';
        button.innerHTML = '(<u>light version</u>)';
    } else {
        body.style.backgroundColor = '#fff';
        text.style.color = '#000';
        button.innerHTML = '(<u>dark version</u>)';
    }
}
