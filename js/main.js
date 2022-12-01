

import hiirData from '../data.json' assert {type: 'json'};
console.log(hiirData)


function hiirTemplate(hiir) {
  return `
    <div class="product">
        <img class="hiir-photo" src="${hiir.photo}">
        <h2 class="hiir-name">${hiir.name} </h2>
        <p><strong></strong> ${hiir.price}</p>

        <a href="${hiir.link}" ><button class = "buyButton">Add to cart</button></a>
    </div>
  `;
}


document.getElementById("app").innerHTML = `
    
    ${hiirData.map(hiirTemplate).join("")}

`;
