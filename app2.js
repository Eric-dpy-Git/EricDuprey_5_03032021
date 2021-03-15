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

/* fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    let affichage = "#camera-0"; */
/*    for (let camera of data) { */
/* affichage += `<div id="camera-0">${data[0].name}</div>`; */
/*  affichage = `<div id="camera">${data[1].name}</div>`; */
/*  affichage += `<div id="camera-description">${Camera.description}</div>`;
      affichage += `<img url="" id="camera-img">${Camera.imageUrl}</img>`; */
/*  }
    document.querySelector("#camera-0").innerText = affichage; */
/*  affichage += `</ul>`; */
/* })
);
 */
fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data.name);
    console.log(data.length);
    console.log(data[0].name);
    document.getElementById("camera-0").textContent = data[0].name;
  })
);
