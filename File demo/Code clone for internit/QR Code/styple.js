
let btnClick = document.getElementById('btnClick');
let text = document.getElementById('text');
let QRcode = document.getElementById('QRcode');

btnClick.addEventListener('click', function() {
    let QR = new QRious ({
        element: QRcode,
        value: text.value,
        size: 300
    });
    QR.show();

})