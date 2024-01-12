const countLabel = document.getElementById("countLabel");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const reset = document.getElementById("reset");

let count;

count = 0;
incrementBtn.onclick = function() {

    count++;
    countLabel.textContent = count;
}
decrementBtn.onclick = function() {

    count--;
    countLabel.textContent = count;
}
reset.onclick = function() {

    count = 0;
    countLabel.textContent = count;
}