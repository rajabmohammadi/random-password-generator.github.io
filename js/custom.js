let inputRange = document.querySelector("input[type=number]");
let inputPassword = document.querySelector("input[type=text]");
let checkboxes = document.querySelectorAll("input.form-check-input");
let copyBtn = document.getElementById("copy");
// declaration variables
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
let password = "";
let charset = "";
// generate password according with specific length.
function generatePassword(length) {
    //every time we need to reset the password value because we generate new password with new length.
    password = "";
    //every time we need to reset the charset value according the checkboxes we change the charset value.
    charset = "";
    if (length > 0 && length <= 50) {
        checked();
        for (let i = 0; i < length; i++) {
            password += charset[randomNumber()]
        }
    } else {
        alert("You arr out of range");
    }
}
// generate a random number according to the charSet variable length.
function randomNumber() {
    return Math.floor(Math.random() * charset.length);
}
// we call the generatePassword when the input change.
inputRange.addEventListener("change", function () {
    setPassword();
})
function checked() {
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.id == "uppercase") charset += uppercase;
            if (checkbox.id == "lowercase") charset += lowercase;
            if (checkbox.id == "number") charset += number;
            if (checkbox.id == "symbol") charset += symbol;
        }
    })
}
window.addEventListener("DOMContentLoaded", function () {
    setPassword();
})
function setPassword() {
    let length = inputRange.value;
    generatePassword(length);
    inputPassword.value = password;
}
// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        let checkedCount = 0;
        // Count the number of checked checkboxes
        checkboxes.forEach(chk => {
            if (chk.checked) {
                checkedCount++;
            }
        });
        // If three checkboxes are unchecked, check the fourth one
        if (checkedCount === 0) {
            checkbox.checked = true;
        }
    });
});

copyBtn.addEventListener('click', function () {
    inputPassword.select();
    document.execCommand("copy")
})