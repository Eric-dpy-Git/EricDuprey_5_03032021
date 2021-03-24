//Eric say welcome inside cart.js !

//copy paste the variable who give local storage content
let storedProduct = JSON.parse(localStorage.getItem("products"));

//get emplacement for inject local storage informations
let cartProductName = document.getElementById("product__article");

//---------------------------------get cart data------------------------------------------

// const format divised price in euro
const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

//condition if empty cart --> display <div empty> if not --> display local storage
if (storedProduct === null || storedProduct == 0) {
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Hummm... Dommage ! votre panier est vide...</p>
    </div>`;
  cartProductName.innerHTML = emptyCart;
} else {
  let showCart = `<div>`;
  //lloop to iterate the local storage information
  for (let i of storedProduct) {
    //need to be in a main page
    var number = i.productPrice / 100;

    //insert Html
    showCart += `<div class="cart__box"><div><img class="cart__img" src="${
      i.productImage
    }"></img></div><div class="cart__description">${i.productName} - ${
      i.productLense
    } - ${
      number /* = formatter.format(
      number
    ) */
    } €</div><form><button class="btn__remove-style btn__remove" type="submit"${
      i.productName
    } "><i class="fas fa-trash-alt"></i></button></form></div>`;
    cartProductName.innerHTML = showCart; //say where to do insert
  }
}
//remove cart product--------------------------------------------------

let removeBtn = document.getElementsByClassName("btn__remove");

for (let j = 0; j < removeBtn.length; j++) {
  removeBtn[j].addEventListener("click", (event) => {
    event.preventDefault();

    let selectRemoveId = storedProduct[j].productId;
    console.log("selectRemoveId");
    /* console.log(selectRemoveId); */

    storedProduct = storedProduct.filter(
      (el) => el.productId !== selectRemoveId
    );
    localStorage.setItem("products", JSON.stringify(storedProduct));
    window.location.href = "cart.html";
  });
}
//clear cart--------------------------------------------------
//get the clear cart button
const btnClearCart = document.getElementById("btn__clearCart");

//remove local storage key
btnClearCart.addEventListener("click", (e) => {
  e.preventDefault;
  localStorage.removeItem("products");
  //refresh page
  window.location.href = "cart.html";
});
//cart price--------------------------------------------------
let cartPriceArray = [];

//get price from cart
for (let k = 0; k < storedProduct.length; k++) {
  let localStoragePriceList = storedProduct[k].productPrice;
  cartPriceArray.push(localStoragePriceList);
}
//cart price addition
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalOfLocalStoragePrice = cartPriceArray.reduce(reducer);
console.log(totalOfLocalStoragePrice);

/* let displayTotalPrice =  */ document.getElementById(
  "totalPrice__cartDisplay"
).innerHTML = totalOfLocalStoragePrice = formatter.format(
  totalOfLocalStoragePrice / 100
);
//-----------------------------------form-------------------------
//catch & listen order button
const orderBtn = document.getElementById("btn__order");

orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Get form elements
  localStorage.setItem("firstname", document.getElementById("firstname").value);
  localStorage.setItem("lastname", document.getElementById("lastname").value);
  localStorage.setItem("mail", document.getElementById("mail").value);
  localStorage.setItem(
    "streetNumber",
    document.getElementById("streetNumber").value
  );
  localStorage.setItem("street", document.getElementById("street").value);
  localStorage.setItem("city", document.getElementById("city").value);
  localStorage.setItem("postcode", document.getElementById("postcode").value);
});
//form elements in object
const fullForm = {
  firstname: localStorage.getItem("firstname"),
  lastname: localStorage.getItem("lastname"),
  mail: localStorage.getItem("mail"),
  streetNumber: localStorage.getItem("streetNumber"),
  street: localStorage.getItem("street"),
  city: localStorage.getItem("city"),
  postcode: localStorage.getItem("postcode"),
};
//object with cart & form
const fullFormAndCart = {
  storedProduct,
  fullForm,
};
console.log(fullFormAndCart);
