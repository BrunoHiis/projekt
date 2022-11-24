localStorage.setItem("cart",JSON.stringify([
  {
    "name": "Logitech G502  sdf ds sfsd fsd ",
    "price": 79.99
  },
  {
    "name": "Logitech G501",
    "price": 49.99
  },
  {
    "name": "Logitech G500",
    "price": 69.69
  }
])
)

function removeProductFromCart(event){
  let id = event.target.parentElement.rowIndex - 1

  let cartJson = JSON.parse(localStorage.getItem("cart"))
  cartJson.splice(id,1)
  localStorage.setItem("cart",JSON.stringify(cartJson))

  event.target.parentElement.remove()
  createSummary()
}

function createCartTable(){
  let cartJson = JSON.parse(localStorage.getItem("cart")) 
  cartTableBody = document.querySelector("#cartTableBody")

  for (let index = 0; index < cartJson.length; index++) {
    const cartRow = cartJson[index];
  
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

function createSummary(){
  let cartJson = JSON.parse(localStorage.getItem("cart"))
  let cartPriceSum = 0
  for (let index = 0; index < cartJson.length; index++) {
    const cartRow = cartJson[index];
    cartPriceSum += cartRow["price"]
  }

  document.getElementById("subtotal").textContent = cartPriceSum + " €"
  document.getElementById("shippingEstimate").textContent = 5 + " €"
  document.getElementById("orderTotal").textContent = cartPriceSum + 5 + " €"
}

createCartTable()
createSummary()
