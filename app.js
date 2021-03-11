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

let articles = document.getElementsByTagName("article");
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    let affichage = "<h2>";
    for (let Camera of data) {
      affichage += `<h2 id="h2-camera">${Camera.name}}</h2>`;
    }
    document.querySelector("#h2-camera").innerHTML = affichage;
    /* document.querySelector("#camera").innerHTML = affichage; */
  })
);
