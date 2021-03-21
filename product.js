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

    //--------------------------
    options = data.lenses;
    console.log(options);

    //variable to show where to inject html
    let show = `<select>`;
    //iteration loop of the array
    for (let i of data.lenses) {
      //in show where to inject html & insert the iteration --> the value can be a variable !
      show += `<option value="${i}" class="option__product-choice">${i}</option>`;
    }
    //do the action to inject html with id emplacement
    document.getElementById("option__product").innerHTML = show;

    /* for (let j of test1) {
      test2 += `<option value="${j}">${j}</option>`;
    }
    console.log(test2);
    const position = document.getElementById("option__product");
    console.log(position);
    position.innerHTML = test2; */
    //-------------------------------------------------------------------------heeeerrree is
    var e = document.getElementById("option__product");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    //-------------------------------------------------------------------------heeeerrree is
    console.log(value);
    console.log(text);

    const idForm = document.getElementById("option__product");

    const choixForm = document.getElementsByClassName("option__product-choice");
    console.log(choixForm);
    const btnEnvoyerPanier = document.getElementById("btn__sent-cart");

    btnEnvoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();
    });
    let otpionProduit = {
      nonProduit: data.name,
      prixProduit: data.price,
    };
    console.log(otpionProduit);
  })
);

//---------------------------------------add to cart---------------------------------
//get form id
