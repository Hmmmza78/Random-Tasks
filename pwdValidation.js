// first collect the password field, error message div and submit button 
// then create a variable containing the validation characters
// in the end, math the password value with the validation variable


    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    pwd.addEventListener("keyup", function() {
        if (!pwd.value.match(passw)) {
            shortPwd.style.display = "block";
            saveBtn.classList.add("disabled");
        } else {
            shortPwd.style.display = "none";
            saveBtn.classList.remove("disabled");
        }
    })
