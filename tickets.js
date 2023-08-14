const slAdultsPrice = 4;
const slChildrenPrice = 2;
const foreignerAdultPrice = 10;
const foreignerChildrenPrice = 5;
const infantsPrice = 0;

const calculatePrice = (quantity, price) => {
  return quantity * price;
};

const updateSummary = () => {
  const slAdultsQuantity = document.getElementById("slAdults").value;
  const slChildrenQuantity = document.getElementById("slChildren").value;
  const foreignerAdultsQuantity = document.getElementById("foreignerAdults").value;
  const foreignerChildrenQuantity = document.getElementById("foreignerChildren").value;
  const infantsQuantity = document.getElementById("infants").value;

  const totalQuantity = slAdultsQuantity + slChildrenQuantity + foreignerAdultsQuantity + foreignerChildrenQuantity + infantsQuantity;
  const totalPrice = calculatePrice(slAdultsQuantity, slAdultsPrice) +
    calculatePrice(slChildrenQuantity, slChildrenPrice) +
    calculatePrice(foreignerAdultsQuantity, foreignerAdultPrice) +
    calculatePrice(foreignerChildrenQuantity, foreignerChildrenPrice) +
    calculatePrice(infantsQuantity, infantsPrice);

  document.getElementById("slAdultsQuantity").innerHTML = slAdultsQuantity;
  document.getElementById("slAdultsPrice").innerHTML = slAdultsPrice * slAdultsQuantity;
  document.getElementById("slChildrenQuantity").innerHTML = slChildrenQuantity;
  document.getElementById("slChildrenPrice").innerHTML = slChildrenPrice * slChildrenQuantity;
  document.getElementById("foreignerAdultsQuantity").innerHTML = foreignerAdultsQuantity;
  document.getElementById("foreignerAdultsPrice").innerHTML = foreignerAdultPrice * foreignerAdultsQuantity;
  document.getElementById("foreignerChildrenQuantity").innerHTML = foreignerChildrenQuantity;
  document.getElementById("foreignerChildrenPrice").innerHTML = foreignerChildrenPrice * foreignerChildrenQuantity;
  document.getElementById("infantsQuantity").innerHTML = infantsQuantity;
  document.getElementById("infantsPrice").innerHTML = infantsPrice * infantsQuantity;
  document.getElementById("totalQuantity").innerHTML = totalQuantity;
  document.getElementById("totalPrice").innerHTML = totalPrice;
};

document.getElementById("slAdults").addEventListener("change", updateSummary);
document.getElementById("slChildren").addEventListener("change", updateSummary);
document.getElementById("foreignerAdults").addEventListener("change", updateSummary);
document.getElementById("foreignerChildren").addEventListener("change", updateSummary);
document.getElementById("infants").addEventListener("change", updateSummary);
