function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
alert("Érvénytelen email cím!");
document.form1.text1.focus();
return false;
}
}

const togglePasswordVisibility = (inputElement, toggleElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="bi bi-eye"></i>'; 
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}

const passwordInput3 = document.getElementById("passBe");
const togglePassword3 = document.getElementById("togglePassword3");

togglePassword3.addEventListener("click", ()=> {
    togglePasswordVisibility(passwordInput3, togglePassword3);
});