//retrieving query string in url
const urlId = window.location.search;
//to take off "?" and keep only id
const onlyId = urlId.slice(1);
//creation of a server address variable + id
url = `http://localhost:3000/api/cameras/${onlyId}`;
fetch(url).then((response) =>
  response.json().then((data) => {
    document.getElementById("product__img").src = data.imageUrl;
    document.getElementById("product__title").innerText = data.name;
    document.getElementById("product__description").innerText =
      data.description;
    //variable to get "€" after price
    let stringEuro = " €";
    document.getElementById("product__price").innerHTML =
      //Divise price
      data.price / 100 + stringEuro;
    //variable to show where to inject html
    let show = "";
    //iteration loop of the array
    for (let i of data.lenses) {
      //in show where to inject html & insert the iteration --> the value can be a variable !
      show += `<option value="${i}" class="option__product-choice" onchange="getSelectValue">${i}</option>`;
    }
    //do the action to inject html with id emplacement
    document.getElementById("option__product").innerHTML = show;
  })
);
//---------------------------------------add to cart---------------------------------
//get form id
let testing = document.getElementById("option__product");
let result = document.getElementsByTagName("h2");

testing.addEventListener,
  function (event) {
    console.log(selection.selectedIndex);
  };
