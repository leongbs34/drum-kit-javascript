//press a key
document.addEventListener('keydown', playSound);

//play sound according to key
function playSound(e){
    switch(e.code){
        case 'KeyA':
            document.querySelector('audio[data-key="65"]').play();
            break;
        case 'KeyS':
            document.querySelector('audio[data-key="83"]').play();
            break;
        case 'KeyD':
            document.querySelector('audio[data-key="68"]').play();
            break;
        case 'KeyF':
            document.querySelector('audio[data-key="70"]').play();
            break;
        case 'KeyG':
            document.querySelector('audio[data-key="71"]').play();
            break;
        case 'KeyH':
            document.querySelector('audio[data-key="72"]').play();
            break;
        case 'KeyJ':
            document.querySelector('audio[data-key="74"]').play();
            break;
        case 'KeyK':
            document.querySelector('audio[data-key="75"]').play();
            break;
        case 'KeyL':
            document.querySelector('audio[data-key="76"]').play();
            break;
    }
}