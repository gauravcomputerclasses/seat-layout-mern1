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
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        const isSelected = e.target.classList.toggle("selected");

        if (isSelected) {
            selectedSeats.push(e.target.dataset.seatNumber);
        } else {
            let index = selectedSeats.indexOf(e.target.dataset.seatNumber);
            selectedSeats.splice(index, 1);
        }
    }
});

// seat ko book kr rahe hai
btn.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
        alert("No Seats Are Selected");
        return;
    }
    let a = confirm(
        `Selected seats are - ${selectedSeats.map((seat) => seat)}`,
    );
    if (a) {
        selectedSeats.forEach((seat) => {
            let seatDiv = document.querySelector(
                `.seat[data-seat-number=${seat}]`,
            );
            seatDiv.classList.remove("selected");
            seatDiv.classList.add("occupied");
        });
        selectedSeats.length = 0;
    }
});
