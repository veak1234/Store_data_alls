
function afterSuccess(response){
    let body = document.getElementById('image');
    for(datas of response.data.hits){
        let img = document.createElement('img');
        img.src = datas.largeImageURL;
        body.appendChild(img);
    }
    console.log(response)
}

axios.get("https://pixabay.com/api/?key=36704197-3cffe9abec683dfe1aa47b8bc&q=yellow+flowers&image_type=photo").then(afterSuccess);