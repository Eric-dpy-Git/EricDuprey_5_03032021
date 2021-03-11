let url = "http://localhost:3000/api/cameras";
/* 
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    let affichage = "<ul>";
    for (let Camera of data) {
      affichage += `<li>${Camera.name}, ${Camera.description}</li>`;
    }
    affichage += `</ul>`;
    document.querySelector("#camera").innerHTML = affichage;
  })
); */

fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    let affichage = "<ul>";
    for (let Camera of data) {
      affichage += `<div id="camera">${Camera.name}</div>`;
      affichage += `<div id="camera-description">${Camera.description}</div>`;
      affichage += `<img url="this" id="camera-img">${Camera.imageUrl}</img>`;
    }
    affichage += `</ul>`;
    document.querySelector("#camera").innerHTML = affichage;
  })
);
