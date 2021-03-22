const mainColor = document.getElementById("main"); //constant for main element
const section = document.getElementById("section-2"); //constant for section element

let listenBtn = document.getElementsByClassName("asideDivBtn__style"); //variable for button element

section.classList.add("hidden__class"); //add the class
mainColor.classList.add("main__color"); //add the class

//listening to the click of the button defined in the variable
listenBtn[0].addEventListener("click", function (event) {
  section.classList.toggle("hidden__class"); //adds the class on the element defined by a variable
  mainColor.classList.toggle("main__color"); //adds the class on the element defined by a variable
});
let url = "http://localhost:3000/api/cameras"; //creation of a server address variable
//fetch then transform the response into json
fetch(url).then((response) =>
  response.json().then((data) => {
    //variable to display the results
    let display = '<div id="article__box">';
    //i = iteration of data
    for (let i of data) {
      //content of display
      display += `<article
            class="article__style article__display article__color" >
            <div class="img__box">
              <figure>
              <a href="produit.html?${i._id}"><img class="img__1" width="200" height="200" alt="image de l'appareil photo sélectionné" src=${i.imageUrl}></a>
              </figure>
            </div>
            <div class="article__card">
              <h2 id="h2-camera-0">${i.name}</h2>
              <p id="description-1">${i.description}</p>
              <a href="produit.html?${i._id}"<form>
              <input class="btn__article" type="submit" value="En savoir plus..." >
              </form></a>
            </div>
            </article>
            `;
    }

    display += "</div>"; //end of display div
    document.getElementById("section-2").innerHTML = display; //display html elements into Dom with id
  })
);

/*  document.getElementById("h2-camera-0").textContent = data[0].name;
    document.getElementById("img__1").src = data[0].imageUrl;
    document.getElementById("description-1").textContent = data[0].description; */

/* let affichage = "<div>";
for (let i of data) {
  affichage += `<div>${i.name}</div>`;
}
affichage += "</div>";
document.querySelector("#test").innerHTML = affichage; */

/* console.log(data);
console.log(data.length);
console.log(data[0].name); */

/* fetch(url)
  .then((res) => res.json())
  .then((data) => (id = data[0].id));
console.log(data[0].id); */

/* let articles = document.getElementsByTagName("article"); */

/* fetch(url).then((response) =>
  response.json().then((data);
  console.log(data) */
/* => { */
/*  console.log(data);
    let affichage = "<h2>";
    for (let camera of data) {
      affichage += `<h2 id="h2-camera-0">${camera.name}</h2>`;
    }
    document.querySelector("#h2-camera-0").innerHTML = affichage; */
/* document.querySelector("#camera").innerHTML = affichage; */
/*  })
); */
