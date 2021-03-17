//retrieving query string in url
const urlId = window.location.search;
//to take off "?" keep only id
const onlyId = urlId.slice(1);
//creation of a server address variable
url = `http://localhost:3000/api/cameras/${onlyId}`;
/* let myProduct = url; */
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    document.getElementById("product__img").src = data.imageUrl;
    document.getElementById("product__title").innerText = data.name;
    document.getElementById("product__description").innerText =
      data.description;
    /* let prix = data.price / 100; */
    let string = " €";
    document.getElementById("product__price").innerHTML =
      data.price / 100 + string;
    /* console.log(prix); */
  })
);
