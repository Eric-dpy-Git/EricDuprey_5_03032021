//retrieving query string in url
const urlId = window.location.search;
//to take off the "?" and keep only id
const onlyId = urlId.slice(1);
//creation of a server address variable + id
url = `http://localhost:3000/api/cameras/${onlyId}`;
fetch(url).then((response) =>
  response.json().then((data) => {
    //inject product image
    document.getElementById("product__img").src = data.imageUrl;
    //inject product name
    document.getElementById("product__title").innerText = data.name;
    //inject product description
    document.getElementById("product__description").innerText =
      data.description;
    //const number = prduct divised price
    var number = data.price / 100;
    // const format divised price in euro
    const formatter = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    });
    //inject divised price inside html
    document.getElementById("product__price").innerHTML = formatter.format(
      number
    );
    //------insert the choice of options in a drop-down menu-------------
    //variable to show where to inject html
    let showOption = `<select>`;
    //iteration loop of the array
    for (let i of data.lenses) {
      //in showOption :  where to inject html & insert the iteration --> the value can be a variable !
      showOption += `<option value="${i}" class="option__product-choice">${i}</option>`;
    }
    //do the action to inject html with id emplacement
    document.getElementById("option__product").innerHTML = showOption;
    //const for btn add to cart
    const addToCart = document.getElementById("btn__addToCart");
    //listen click add to cart btn
    addToCart.addEventListener("click", (event) => {
      event.preventDefault();
      //get the drop-down menu choice !!!inside eventlistener!!!
      var e = document.getElementById("option__product");
      /* var value = e.options[e.selectedIndex].value; */
      var text = e.options[e.selectedIndex].text;
      //list for local storage !!!inside eventlistener!!!
      let productSet = {
        productName: data.name,
        productId: data._id,
        productPrice: data.price,
        productLense: text,
        productImage: data.imageUrl,
      };
      //---------------------------------------local storage---------------------------------
      //parse methode for get items in local storage
      let storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
      //first : check if the local storage contains anything
      if (storedProducts) {
        //add selectioned product in local storage if already has product
        storedProducts.push(productSet);
        localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
      } else {
        //if not --> create & add
        storedProducts = [];
        storedProducts.push(productSet);
        localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
      }
    });
  })
);
