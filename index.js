let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let sum = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function add() {
    // Get the text content of saveEl
    let saveText = saveEl.textContent;
    // Remove any additional text
    let numbersText = saveText.replace('Previous entries: ', '');
    // Split countStr using ' - ' as the delimiter
    let numbers = numbersText.split(' - ');
    // Remove any empty elements
    numbers = numbers.filter(num => num !== '');
    sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
    totalEl.textContent = `Total People Entered: ${sum}`;
}

function save() {
    let countStr = count + " - ";
    if (count > 0) {
        saveEl.textContent += countStr;
        countEl.textContent = 0;
        count = 0;
        add()
    } else {
        // Do nothing if count is not greater than 0
    }
}