//Raido Aunpuu

function removeProductFromCart(event) {
  //event.target on nupp, millel vajutati
  let id = event.target.parentElement.rowIndex - 1

  let cartJson = JSON.parse(localStorage.getItem("cart"))

  //Eemalda indexi kaudu vastav element
  cartJson.splice(id, 1)

  localStorage.setItem("cart", JSON.stringify(cartJson))

  //Eemalda kogu rea element
  event.target.parentElement.remove()

  //Tuleb uuesti arvutada ostukorvi kokkuvõte
  createSummary()
}

function createCartTable() {
  let cartJson = JSON.parse(localStorage.getItem("cart"))
  cartTableBody = document.querySelector("#cartTableBody")

  //Iga toote kohta tehakse rida html tbody elementi
  for (let index = 0; index < cartJson.length; index++) {
    const cartRow = cartJson[index]

    let tdName = document.createElement("td")
    tdName.textContent = cartRow["name"]

    let tdPrice = document.createElement("td")
    tdPrice.textContent = cartRow["price"] + " €"

    let Button = document.createElement("button")
    Button.textContent = "X"
    Button.onclick = removeProductFromCart

    let tr = document.createElement("tr")
    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(Button)
    cartTableBody.appendChild(tr)
  }
}

function createSummary() {
  let cartJson = JSON.parse(localStorage.getItem("cart"))
  let cartPriceSum = 0
  for (let index = 0; index < cartJson.length; index++) {
    const cartRow = cartJson[index]
    cartPriceSum += cartRow["price"]
  }
  cartPriceSum = Math.round(cartPriceSum * 10) / 10
  //lisa uued väärtused ka html elementidele
  document.getElementById("subtotal").textContent = cartPriceSum + " €"
  document.getElementById("shippingEstimate").textContent = 5 + " €"
  document.getElementById("orderTotal").textContent = cartPriceSum + 5 + " €"
}

createCartTable()
createSummary()

// Bruno Hiis, listenime checkout nupule
document.getElementById("checkout").onclick = () => {
  // Bruno Hiis, kui ostukorv on tühi, siis ei saa edasi midagi teha
  if (JSON.parse(localStorage.getItem("cart")).length === 0) {
    alert("Your cart is empty")
  } else {
    alert("Thank you for your purchase!")
  }
}
