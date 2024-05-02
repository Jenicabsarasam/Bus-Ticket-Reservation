const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const busSelect = document.getElementById("bus");

populateUI();

let ticketPrice = +busSelect.value;

// Save selected movie index and price
function setbusData(busIndex, busPrice) {
  localStorage.setItem("selectedbusIndex", busIndex);
  localStorage.setItem("selectedbusPrice", busPrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setbusData(busSelect.selectedIndex, busSelect.value);
}


// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }

  const selectedbusIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedbusIndex !== null) {
    busSelect.selectedIndex = selectedbusIndex;
    console.log(selectedbusIndex)
  }
}
console.log(populateUI())
// Movie select event
busSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setbusData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
function paymentPage(){
  window.location.href='Payment.html';
}