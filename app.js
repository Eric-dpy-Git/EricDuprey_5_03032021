const mainColor = document.getElementById("main"); //constante pour l'élément main
const section = document.getElementById("section-2"); //constante pour l'élément section

let listenBtn = document.getElementsByClassName("asideDivBtn__style"); //variable pour l'élément bouton

section.classList.add("hidden__class"); //ajoute la class
mainColor.classList.add("main__color"); //ajoute la class

//à l'écoute du click du bouton défini dans la variable
listenBtn[0].addEventListener("click", function (event) {
  section.classList.toggle("hidden__class"); //ajoute la class sur l'élément défini par une variable
  mainColor.classList.toggle("main__color"); //ajoute la class sur l'élément défini par une variable
});

let url = "http://localhost:3000/api/cameras";

fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    console.log(data.length);
    console.log(data[0].name);
    document.getElementById("h2-camera-0").textContent = data[0].name;
    document.getElementById("img__1").src = data[2].imageUrl;
    document.getElementById("description-1").textContent = data[0].description;
  })
);

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
