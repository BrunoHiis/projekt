import hiirData from "../data.json" assert { type: "json" }

//Kaarel Tamuri - Returnib div-i, kus on andmed data.json failist
function hiirTemplate(hiir) {
  return `
    <div class="product">
        <img class="hiir-photo" src="${hiir.photo}">
        <h2 class="hiir-name">${hiir.name} </h2>
        <p><strong></strong> ${hiir.price} €</p>

        <button class = "buyButton">Add to cart</button>
        <div id="${hiir.name}-message-wrapper"></div>
    </div>
  `
}

//Kaarel Tamuri - käib kõik objektid hiirData arrays läbi ning rakendab iga ühe jaoks hiirData funktsiooni, joinib need kokku ning lisab id="app" kohale products.html failis
document.getElementById("app").innerHTML = `
    ${hiirData.map(hiirTemplate).join("")}
    
`

// Raido Aunpuu, lisab nuppudele onClick, et asju ostukorvi lisada
document
  .getElementById("app")
  .querySelectorAll(".buyButton")
  .forEach((btn) => {
    btn.onclick = (event) => {
      let productName = event.target.parentElement.querySelector(".hiir-name").innerText
      for (let index = 0; index < hiirData.length; index++) {
        const product = hiirData[index]
        if (product.name === productName) {
          index = hiirData.length
          let cartJson = JSON.parse(localStorage.getItem("cart"))
          //kui localstorage on tühi
          if (cartJson === null) {
            cartJson = []
          }
          cartJson.push(product)
          localStorage.setItem("cart", JSON.stringify(cartJson))

          // Bruno Hiis, võtame ostukorvi lisamise teateks vajaliku data
          const howmanyThisItermInCart = cartJson.filter(
            (item) => item.name === productName
          )
          const successElementId = `${product.name}-message-wrapper`

          // Bruno Hiis, näitame kasutajale, et toode on lisatud ostukorvi
          document.getElementById(successElementId).innerHTML =
            "Product added to cart" + " " + howmanyThisItermInCart.length + "x"
          document.getElementById(successElementId).className = "success-message"
        }
      }
    }
  })
