

let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let input = document.querySelector('input');
let btn = document.querySelector('button');
let img = document.getElementById('qrImg');


async function getQR() {
    let theQr = (url + input.value);
    img.src = theQr
    console.log(theQr)
}