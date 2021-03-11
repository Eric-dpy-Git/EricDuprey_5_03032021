const mainColor = document.getElementsByTagName("main"); //constante pour l'élément main
const section = document.querySelectorAll("section"); //constante pouir l'élément section

let listenBtn = document.getElementsByClassName("asideDivBtn__style"); //variable pour l'élément bouton

section[1].classList.add("hidden__class"); //ajoute la class
mainColor[0].classList.add("main__color"); //ajoute la class

//à l'écoute du click du bouton défini dans la variable
listenBtn[0].addEventListener("click", function (event) {
  section[1].classList.toggle("hidden__class"); //ajoute la class sur l'élément défini par une variable
  mainColor[0].classList.toggle("main__color"); //ajoute la class sur l'élément défini par une variable
});
