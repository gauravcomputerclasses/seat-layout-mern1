// ROW - A-G (7ROWS)
// SEATS - 20 SEATS
// UI JS
// DIV
// ID / DATA-SEATNO ATTRIBUTE
// String.fromCharCode(num)

let container = document.querySelector(".seat-layout");
let fragment = document.createDocumentFragment();

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
