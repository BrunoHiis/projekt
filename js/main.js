

import hiirData from '../data.json' assert {type: 'json'};
console.log(hiirData)


function hiirTemplate(hiir) {
  return `
    <div class="product">
        <img class="hiir-photo" src="${hiir.photo}">
        <h2 class="hiir-name">${hiir.name} <span class="comments">(${hiir.comments})</span></h2>
        <p><strong>Hind:</strong> ${hiir.price}</p>
        <a href="${hiir.link}" class="button">Rohkem infot</a>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Products</h1>
    ${hiirData.map(hiirTemplate).join("")}

`;
