//Eric say welcome inside cart.js !
//copy paste the variable who give local storage content
let storedProduct = JSON.parse(localStorage.getItem("products"));
//get emplacement for inject local storage informations
let cartProductName = document.getElementById("product__article");

console.log(storedProduct);
//remove item from --> https://youtu.be/pJfQIrMEnBc
//need to improve
/* function removeItem(productName) {
  for (let j = 0; j < storedProduct.length; j += 1) {
    if (storedProduct[j].productName === productName) {
      storedProduct.splice(j, 1);
      return;
    } else {
      return false;
    }
  }
}
remove = removeItem("Katatone"); */

//---------------------------------get cart data------------------------------------------
//condition if empty cart --> display <div empty> if not display local storage
if (storedProduct === null) {
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Hummm... dommage ! votre panier est vide...</p>
    </div>`;
  cartProductName.innerHTML = emptyCart;
} else {
  let showTest = `<div class="à remplir">`;
  for (let i of storedProduct) {
    console.log(storedProduct);
    var number = i.productPrice / 100;
    // const format divised price in euro
    const formatter = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    });
    showTest += `<div class="cart__box"><div><img class="cart__img" src="${
      i.productImage
    }"></img></div><div class="cart__description">${i.productName} - ${
      i.productLense
    } - ${(i.productPrice = formatter.format(
      number
    ))}</div><form><input id="btn__remove" class="btn__remove-style" type="submit" value="supprimer"${
      i.productName
    } "></form></div>`;
    cartProductName.innerHTML = showTest;
  }
}

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
