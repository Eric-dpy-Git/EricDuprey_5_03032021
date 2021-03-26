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
  //lloop to iterate the local storage information
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
    /*   console.log([i.productId]);
    let inline = [i.productId];
    console.log(inline); */
    //------------------------------------------------------

    //------------------------------------------------------
    const orderBtn = document.getElementById("btn__order");
    orderBtn.addEventListener("click", (e) => {
      e.preventDefault();
      //Get form values
      const testing = {
        contact: {
          firstName: document.getElementById("firstname").value,
          lastName: document.getElementById("lastname").value,
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          email: document.getElementById("email").value,
        },
        products: [i.productId],
      };
      const promise01 = fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(testing),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
  }
  //remove one cart product-------------------------------------------
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

  //-----------------------------------form-------------------------

  //catch & listen order button
  /* const orderBtn = document.getElementById("btn__order");
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Get form values
  const testing = {
    contact: {
      firstName: document.getElementById("firstname").value,
      lastName: document.getElementById("lastname").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    },
    products: productsId,
  }; */

  /*   const fullFormAndCart = {
    contact: {
      products,
    },
  }; */

  //send form into local storage
  /* console.log(fullFormAndCart); */
  //create contact array
  /* contact = ["contact"]; */
  //send form data in array contact
  /* contact.push(contact); */
  //convert in json language

  /* localStorage.setItem("contact", JSON.stringify(testing)); */

  //fetch form & cart to get back an order id------------------------------
  /* const promise01 = fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    body: JSON.stringify(testing),
    headers: {
      "Content-Type": "application/json",
    },
  }); */
}

/* const test = {
  contact: {
    firstName: "Lisa",
    lastName: "duprey",
    address: "jhefkzhfkzefhkz",
    city: "Paris",
    email: "eric@gmail.com",
  },
  products: ["5be1ed3f1c9d44000030b061"],
};
console.log(test); */

//fetch form & cart to get back an order id------------------------------
/* const promise01 = fetch("http://localhost:3000/api/cameras/order", {
  method: "POST",
  body: JSON.stringify(test),
  headers: {
    "Content-Type": "application/json",
  },
}); */
