const mainColor = document.getElementsByTagName("main");
const articles = document.querySelectorAll("section");
articles[1].classList.add("hidden__class");
/* articles[1].classList.add("hidden__class");
articles[2].classList.add("hidden__class");
articles[3].classList.add("hidden__class");
articles[4].classList.add("hidden__class"); */
mainColor[0].classList.add("main__color");

let listenBtn = document.getElementsByClassName("asideDivBtn__style");

listenBtn[0].addEventListener("click", function (event) {
  articles[1].classList.toggle("hidden__class");
  articles[0].classList.toggle("test");
  /*  articles[1].classList.toggle("hidden__class");
  articles[2].classList.toggle("hidden__class");
  articles[3].classList.toggle("hidden__class");
  articles[4].classList.toggle("hidden__class"); */
  mainColor[0].classList.toggle("main__color");
});
