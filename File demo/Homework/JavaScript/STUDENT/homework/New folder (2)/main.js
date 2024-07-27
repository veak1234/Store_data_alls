
let imagefile= document.querySelector('img');
let inputtip = document.querySelector('#picher');

imagefile.style.display='none';
inputtip.onchange = (e) => {

    imagefile.style.display='block';

    if (inputtip.files[0]){
        imagefile.src = URL.createObjectURL(inputtip.files[0]);
        document.body.appendChild(imagefile);
    };
    
};

// document.getElementById('picher').addEventListener('change', function() {
//     let url = URL.createObjectURL(this.files[0]);
//     console.log(url);
//     let img = document.createElement('img');
//     img.src = url;
//     document.body.appendChild(img)
// });