//Eric say welcome inside cart.js !
//copy paste the variable who give local storage content
let storedProduct = JSON.parse(localStorage.getItem("products"));
console.log(storedProduct);
//get emplacement for inject local storage informations
let cartProductName = document.getElementById("product__article");
//condition if empty cart --> display <div empty> if not display local storage
//empty cart
if (storedProduct === null) {
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Panier vide</p>
    </div>`;
  cartProductName.innerHTML = emptyCart;
} else {
  //anything into cart
  //loop
  let cartProductDisplay = [];
  for (i = 0; i < storedProduct.length; i++) {
    console.log(storedProduct.length);
    cartProductName =
      cartProductName + `<div>${storedProduct[i].productName}</div>`;
  }
  if (i == storedProduct.length) {
    cartProductName.innerHTML = storedProduct;
  }
}
