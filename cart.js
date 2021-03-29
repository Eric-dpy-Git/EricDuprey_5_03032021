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
      <p class="empty__cart-font">Hummm... Dommage ! votre panier est vide...</p></br>
      <form>
             <a href="index.html">
            <input
                  class="btn__article"
                  type="submit"
                  value="Revenir à la page principale"
                /></a>
              </form>
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

      cartIdArray.push(localStoragePriceId);
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
        let productList = orderConfirmation.products;
        let productsArray = [];
        for (let m = 0; m < productList.length; m++) {
          let testing = productList[m].name;
          productsArray.push(testing);
          document.getElementById(
            "orderDisplay"
          ).innerHTML = `<div class="order__confirmation">
          <div class="order__text-box">
            <p class="order__text">Bravo, ${orderConfirmation.contact.firstName} ${orderConfirmation.contact.lastName}, votre commande n° ${orderConfirmation.orderId} est validée ! </p></br>
            <p class="order__text">Restez dans votre cannapé, la commande : ${productsArray} pour un montant de ${totalOfLocalStoragePrice} vous sera livré trés rapidement. </p></br>
            <p class="order__text">À bientôt sur Orinoco</p></br>
            <form>
             <a href="index.html">
            <input
                  class="btn__article"
                  id="btn__order"
                  type="submit"
                  value="Revenir à la page principale"
                /></a>
              </form>
          </div>
        </div>`;
        }
      });
  });
}
//-------------------------------reg ex
let form = document.getElementById("form__order");

//listen firstname modification---------------------------------------
form.firstname.addEventListener("change", function () {
  validFirstname(this);
});
//firstname validation-------------------------------------------------
const validFirstname = function (inputFirstname) {
  let firstnameRegExp = new RegExp("^[a-z]+[ -']?[[a-z]+[ -']?]*[a-z]+$", "gi");
  //get emplacement small tag
  let small = document.getElementById("firstname__message");
  //if test is true
  if (firstnameRegExp.test(inputFirstname.value)) {
    small.innerHTML = "prénom valide";
    small.classList.remove("text__false");
    small.classList.add("text__true");
  } else {
    small.innerHTML = "prénom non valide";
    small.classList.remove("text__true");
    small.classList.add("text__false");
  }
};

//listen lastname modification---------------------------------------
form.lastname.addEventListener("change", function () {
  validLastname(this);
});
//firstname validation-------------------------------------------------
const validLastname = function (inputLastname) {
  let lastnameRegExp = new RegExp("^[a-z]+[ -']?[[a-z]+[ -']?]*[a-z]+$", "gi");
  //get emplacement small tag
  let small = document.getElementById("lastname__message");
  //if test is true
  if (lastnameRegExp.test(inputLastname.value)) {
    small.innerHTML = "nom valide";
    small.classList.remove("text__false");
    small.classList.add("text__true");
  } else {
    small.innerHTML = "nom non valide";
    small.classList.remove("text__true");
    small.classList.add("text__false");
  }
};

//listen adress modification---------------------------------------
form.address.addEventListener("change", function () {
  validAddress(this);
});
//address validation-------------------------------------------------
const validAddress = function (inputAddress) {
  let addressRegExp = new RegExp("");
  //get emplacement small tag
  let small = document.getElementById("address__message");
  //if test is true
  if (addressRegExp.test(inputAddress.value)) {
    small.innerHTML = "adresse valide";
    small.classList.remove("text__false");
    small.classList.add("text__true");
  } else {
    small.innerHTML = "adresse non valide";
    small.classList.remove("text__true");
    small.classList.add("text__false");
  }
};

//-------------------------------------------emailregex------------
//listen email modification
form.email.addEventListener("change", function () {
  validEmail(this);
});
//email validation-------------------------------------------------
const validEmail = function (inputEmail) {
  //regexp email validation
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  //get emplacement small tag
  let small = document.getElementById("message");
  //if test is true
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = "email valide";
    small.classList.remove("text__false");
    small.classList.add("text__true");
  } else {
    small.innerHTML = "email non valide";
    small.classList.remove("text__true");
    small.classList.add("text__false");
  }
};
