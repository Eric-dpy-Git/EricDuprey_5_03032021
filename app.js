const articles = document.querySelectorAll("article");
articles[0].classList.add("hidden__class");
articles[1].classList.add("hidden__class");
articles[2].classList.add("hidden__class");
articles[3].classList.add("hidden__class");
articles[4].classList.add("hidden__class");

let listenBtn = document.getElementsByClassName("asideDivBtn__style");

listenBtn[0].addEventListener("click", function (event) {
  articles[0].classList.toggle("hidden__class");
  articles[1].classList.toggle("hidden__class");
  articles[2].classList.toggle("hidden__class");
  articles[3].classList.toggle("hidden__class");
  articles[4].classList.toggle("hidden__class");
});
