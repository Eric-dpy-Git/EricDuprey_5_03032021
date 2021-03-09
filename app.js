let hiddenClass = document.querySelectorAll("article");
for (let article of hiddenClass) {
  article.classList.add("hidden__class");
}

let listenBtn = "asideDivBtn__style";
listenBtn.addEventListener("click", function (event) {
  article.classList.remove("hidden__class");
});
