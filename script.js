// ROW - A-G (7ROWS)
// SEATS - 20 SEATS
// UI JS
// DIV
// ID / DATA-SEATNO ATTRIBUTE
// String.fromCharCode(num)

const selectedSeats = [];

let container = document.querySelector(".seat-layout");
let fragment = document.createDocumentFragment();
let btn = document.querySelector(".book-btn");

// Creating Rows
for (let i = 65; i <= 71; i++) {
    let row = document.createElement("div");
    row.classList.add("seat-row");
    let rowChar = String.fromCharCode(i);

    // Creating Seats
    for (let j = 1; j <= 20; j++) {
        let seat = document.createElement("div");
        seat.classList.add("seat");
        seat.dataset.seatNumber = rowChar + j;
        seat.innerText = rowChar + j;
        row.appendChild(seat);
    }

    fragment.appendChild(row);
}

container.appendChild(fragment);

// Selecting Seats
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat")) {
        const isSlected = e.target.classList.toggle("selected");

        if (isSlected) {
            selectedSeats.push(e.target.dataset.seatNumber);
            console.log(selectedSeats);
        } else {
            let index = selectedSeats.indexOf(e.target.dataset.seatNumber);
            selectedSeats.splice(index, 1);
            console.log(selectedSeats);
        }
    }
});

// seat ko book kr rahe hai
btn.addEventListener("click", () => {
    const seats = document.querySelectorAll(".seat");
    seats.forEach((seat) => {
        selectedSeats.forEach((sSeat) => {
            if (seat.dataset.seatNumber === sSeat) {
                seat.classList.remove("selected");
                seat.classList.add("occupied");
            }
        });
    });
});
