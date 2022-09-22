const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const conmmentInput = document.getElementById("conmments")
const selectInput = document.getElementById("select")
const submitButton = document.getElementsById("btn")

btn.addEventListener("keyup"), (e) => {
    const value = e.currentTarget.value;
    submitButton.disabled = false;

    if (value == "") {
        submitButton.disabled = true;
    }  
}