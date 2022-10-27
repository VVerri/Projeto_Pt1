let button = document.querySelector('button');
button.addEventListener('click', () =>{
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    let dialog = document.createElement('div');
    dialog.className = 'dialog'

    let span = document.createElement('span');
    span.innerHTML = 'Dialog supimpa'

    let button = document.createElement('button');
    button.innerHTML = 'Fechar'
    button.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(dialog);
    })

    dialog.appendChild(span);
    dialog.appendChild(button);
    document.body.appendChild(dialog);
})