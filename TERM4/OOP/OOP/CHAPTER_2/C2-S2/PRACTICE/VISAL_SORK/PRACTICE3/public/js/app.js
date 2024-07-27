
const BASE_URL = "http://localhost:3000/";

function getName() {
  // YOUR CODE HERE
  let productId = inputId.value;
  let path = "product_name/"+productId
  axios.get(BASE_URL + path).then((response)=>{
    
    let productName = response.data.name;
    if(productName!=null){
      result.textContent = "The product name is : " + productName;
      result.style.color = "black";
    }
    else{
      result.textContent = "No product found";
      result.style.color = "red";
    }
  })
  .catch((error)=>console.log(error));

}

function getBrand() {
  // YOUR CODE HERE
  let productId = inputId.value;
  let path = "product_brand/"+productId
  axios.get(BASE_URL + path).then((response)=>{

    let productBrand = response.data.brand;
    if(productBrand !=null){
      result.textContent = "The product brand is : " + productBrand;
      result.style.color = "black";
    }
    else{
      result.textContent = "No product found";
      result.style.color = "red";
    }
  })
  .catch((error)=>console.log(error));
}

const result = document.querySelector("#result");
const inputId = document.getElementById('prodId');

const getNameButton = document.querySelector("#getName");
getNameButton.addEventListener("click", getName);

const getNameBrand = document.querySelector("#getBrand");
getNameBrand.addEventListener("click", getBrand);
