//Eric say welcome inside cart.js !
//copy paste the variable who give local storage content
let storedProduct = JSON.parse(localStorage.getItem("products"));
//get emplacement for inject local storage informations
let cartProductName = document.getElementById("product__article");
//---------------------------------get cart data------------------------------------------
//condition if empty cart --> display <div empty> if not display local storage
let showTest = `<div class="à remplir">`;
if (storedProduct === null) {
  console.log(storedProduct);
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Hummm... dommage ! votre panier est vide...</p>
    </div>`;
  cartProductName.innerHTML = emptyCart;
}
for (let i of storedProduct) {
  console.log(storedProduct);
  var number = i.productPrice / 100;
  // const format divised price in euro
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  showTest += `<div>${i.productName} - ${
    i.choixLentille
  } - ${(i.productPrice = formatter.format(number))}</div>`;
}

cartProductName.innerHTML = showTest;
//not working------------------------------------------------------------------------------------------------------------------
/* if (storedProduct === null) {
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Panier vide</p>
    </div>`;
  cartProductName.innerHTML = emptyCart;
} else {
  cartProductDisplay = `<ul><p>produits</p>`;
  for (i = 0; i < storedProduct.length; i++) {
    console.log(storedProduct);
    cartProductName += ` <li>Produit : ${storedProduct[i].productName} - prix : ${storedProduct[i].productPrice}</li>`;
  }
  cartProductDisplay += `</ul>`;
  if (i === storedProduct.length) {
    cartProductName.innerHTML = storedProduct;
  }
  document.getElementById("product__article").innerHTML = cartProductName;
} */
