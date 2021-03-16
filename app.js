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
    document.getElementById("h2-camera-0").textContent = data[0].name;
    document.getElementById("img__1").src = data[0].imageUrl;
    document.getElementById("description-1").textContent = data[0].description;
  })
);

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
