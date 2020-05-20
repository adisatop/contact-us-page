// this function validate the form fields.
// in case one of form fields is invalid it will returns false 
// otherwise it will return true
var errorMessages = "";

function checkIfFormIsValid() {
    //check full name - first and last in input
    isContainsFullName();
    // //     // check age - age must be between 18-67
    isAgeValid();

    isPhoneIsValid();
    // /// check phone number format
    isContactSubjectIsValid()
    return displayErrorDiv();
}

function isContainsFullName() {
    var value = document.forms["myForm"]["full name"].value;
    if (value != "") {
        var splited = value.split(" ");
        if (splited.length > 1) {
            console.log("full name is valid")
            return true;
        }
    }
    saveErrorMsg("the name isn't invalid")
}

function isAgeValid() {
    var value = document.forms["myForm"]["age"].value;
    if (value > 18 && value < 67) {
        return true;
    }
    saveErrorMsg("the age isn't invalid, make sure the age is between 18 to 67")
}

function isPhoneIsValid() {
    var value = document.forms["myForm"]["phone"].value;
    var x = value[3];
    if (x == "-") {
        var splited = value.split("-");
        var parsed = parseInt(splited[0]);
        if (Number.isInteger(parsed) == true) {
            // check lenght of numbers is 3 
            parsed = parseInt(splited[1]);
            if (Number.isInteger(parsed) == true) {
                return true;
            }
        }
    }
    saveErrorMsg("the phone number isn't invalid, make sure the number is in correctly format" +
        ": xxx-xxxxxxx")
}

function isContactSubjectIsValid() {
    var value = document.forms["myForm"]["contact-subject"].value;
    if (value.length > 0 && value.length < 120) {
        return true;
    }
    saveErrorMsg("the contect subject lenght cannot be greater than 120 or empty")
}

function saveErrorMsg(ErrorMsg) {
    errorMessages += ErrorMsg + "\n";

}

function displayErrorDiv() {
    if (errorMessages != "") {
        document.getElementById("error").innerText = errorMessages;
        document.getElementById("error").style.display = "block";
        return false;
    }
    return true;
}

console.log("validator.js was loaded successfully")