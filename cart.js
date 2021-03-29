//Eric say welcome inside cart.js !

//copy paste the variable who give local storage content
let storedProducts = JSON.parse(localStorage.getItem("storedProducts"));
//get emplacement for inject local storage informations
let cartProductPlace = document.getElementById("product__article");

//---------------------------------get cart data------------------------------------------

// const format divised price in euro
const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});
//condition if empty cart --> display <div empty> if not --> display local storage
if (storedProducts === null || storedProducts == 0) {
  const emptyCart = `
    <div class="empty__cart">
      <p class="empty__cart-font">Hummm... Dommage ! votre panier est vide...</p>
    </div>`;
  cartProductPlace.innerHTML = emptyCart;
} else {
  let showCart = `<div>`;
  //loop to iterate the local storage information
  for (let i of storedProducts) {
    //need to be in a main page
    var number = i.productPrice;
    //insert Html with variables inside tags
    showCart += `<div class="cart__box"><div><img class="cart__img" src="${
      i.productImage
    }"></img></div><div class="cart__name">${i.productName} - ${
      i.productLense
    } - ${(number = formatter.format(
      number / 100
    ))}</div><form><button class="btn__remove-style btn__remove" type="submit"${
      i.productName
    } "><i class="fas fa-trash-alt"></i></button></form></div>`;
    cartProductPlace.innerHTML = showCart; //say where to do insert
  }
}
//remove one cart product------------------------------------------- not working
let removeBtn = document.getElementsByClassName("btn__remove");
//loop to get index of products list
for (let j = 0; j < removeBtn.length; j++) {
  removeBtn[j].addEventListener("click", (event) => {
    event.preventDefault(); //dont refresh page
    //variable for the selected id from itération
    let selectRemoveId = storedProducts[j].productId;
    //filter action in reverse with "!"
    storedProducts = storedProducts.filter(
      (el) => el.productId !== selectRemoveId
    ); //send into local storage withe stringify
    localStorage.setItem("storedroducts", JSON.stringify(storedProducts));
    window.location.href = "cart.html"; //refresh page
  });
}
//remove one cart product------------------------------------------- not working
//clear all cart--------------------------------------------------
//get the clear cart button
const btnClearCart = document.getElementById("btn__clearCart");
//event with button
btnClearCart.addEventListener("click", (e) => {
  e.preventDefault; //refresh page
  //remove local storage key
  localStorage.removeItem("storedProducts");
  window.location.href = "cart.html"; //refresh page
});
//----------------------------cart addition inside storedProduct condition--------------------------
//create tab for reduce work
let cartPriceArray = [];
//iteration of price list

for (let k = 0; k < storedProducts.length; k++) {
  let localStoragePriceList = storedProducts[k].productPrice;
  cartPriceArray.push(localStoragePriceList);
}
//cart price addition
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalOfLocalStoragePrice = cartPriceArray.reduce(reducer);
//place to display total cart amount
document.getElementById(
  "totalPrice__cartDisplay"
).innerHTML = totalOfLocalStoragePrice = formatter.format(
  totalOfLocalStoragePrice / 100
);

//-----------------------------------------------------------------------------------------
const orderBtn = document.getElementById("btn__order");
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //----------------------------get only products id
  let cartIdArray = [];
  for (let l = 0; l < storedProducts.length; l++) {
    let localStoragePriceId = storedProducts[l].productId;
    /* console.log(localStoragePriceId); */
    cartIdArray.push(localStoragePriceId);
    /* console.log(cartIdArray); */
  }
  //----------------------------prepare elements to send at the server
  const orderElement = {
    contact: {
      firstName: document.getElementById("firstname").value,
      lastName: document.getElementById("lastname").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    },
    products: cartIdArray,
  };
  /* console.log(cartIdArray); */
  //post fetch & stringify the elements to server
  let promise01 = fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    body: JSON.stringify(orderElement),
    headers: {
      "Content-Type": "application/json",
    },
  })
    //convert response in json
    .then((reponse) => {
      return reponse.json();
    })

    //then name confirmation
    .then((orderConfirmation) => {
      console.log(orderConfirmation);
      console.log(orderConfirmation.orderId);
      console.log(orderConfirmation.contact.firstName);
      console.log(orderConfirmation.contact.lastName);

      let productList = orderConfirmation.products;
      let productsArray = [];
      for (let m = 0; m < productList.length; m++) {
        let testing = productList[m].name;
        /* console.log(localStoragePriceId); */
        productsArray.push(testing);
        console.log(productsArray);

        document.getElementById(
          "orderDisplay"
        ).innerHTML = `<div class="order__confirmation"><div class="order__text-box"><p class="order__text">Bravo, ${orderConfirmation.contact.firstName} ${orderConfirmation.contact.lastName}, votre commande n° ${orderConfirmation.orderId} est validée ! </p></br>
      <p class="order__text">Restez dans votre cannapé, la commande : ${productsArray} pour un montant de ${totalOfLocalStoragePrice} vous sera livré trés rapidement. </p></br>
      <p class="order__text">À bientôt sur Orinoco</p></div>
      </div>`;
      }
    });
});
