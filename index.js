var inputField = document.getElementById("input");

function appendValue(value) {
    inputField.value += value;
}

function calculateResult() {
    try {
        inputField.value = eval(inputField.value);
    } catch (e) {
        inputField.value = "Error";
    }
}

function clearInput() {
    inputField.value = "";
}
