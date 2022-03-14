// User input variables:
var enter;
var confirmNumber;
var confirmSpecialChar;
var confirmUppercase;
var confirmLowercase;

// Special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabet characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// The upper_space list is where all the uppercased letters will be after conversion
var upper_space = [];
// user_choices declared outside the if statement so they can be concatenated upon condition
var user_choices;
// converts letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var btn = document.querySelector("#generate");

btn.addEventListener("click", function () {
    secured_pass = generatePassword();
    document.getElementById("password").placeholder = secured_pass;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation
    if (!enter) {
        window.alert("You need to choose a lenth for your password!");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(window.prompt("You must choose between 8 and 128 characters"));

    } else {
        // if the length is satisfied, then ask user to confirm their user_choices
        confirmSpecialChar = window.confirm("Do you want special characters?");
        confirmLowercase = window.confirm("Do you want Lowercase letters?");
        confirmUppercase = window.confirm("Do you want Uppercase letters?");
        confirmNumber = window.confirm("Do you want numbers?");
    };

    // if statement when no criteria are selected
    if (!confirmSpecialChar && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        user_choices = window.alert("You must select at least one creteria!");
    }
    // Else if: 4 options are selected
    else if (confirmSpecialChar && confirmNumber && confirmUppercase && confirmLowercase) {
        user_choices = character.concat(number, alpha, alpha2);
    }
    // Else if: 3 options are selected
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        user_choices = number.concat(alpha, alpha2);
    }
    else if (confirmSpecialChar && confirmNumber && confirmLowercase) {
        user_choices = character.concat(number, alpha);
    }
    else if (confirmSpecialChar && confirmLowercase && confirmUppercase) {
        user_choices = character.concat(alpha, alpha2);
    }
    else if (confirmSpecialChar && confirmNumber && confirmUppercase) {
        user_choices = character.concat(number, alpha2);
    }
    // Else if: 2 options are selected
    else if (confirmSpecialChar && confirmLowercase) {
        user_user_choices = character.concat(alpha);
    }
    else if (confirmSpecialChar && confirmNumber) {
        user_choices = character.concat(number);
    }
    else if (confirmSpecialChar && confirmUppercase) {
        user_choices = character.concat(alpha2);
    }
    else if (confirmNumber && confirmUppercase) {
        user_choices = number.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        user_choices = alpha.concat(number);
    }
    else if (confirmLowercase && confirmUppercase) {
        user_choices = alpha.concat(alpha2);
    }

    // Else if: 1 options is selected
    else if (confirmSpecialChar) {
        user_choices = character;
    }
    else if (confirmNumber) {
        user_choices = number;
    }
    else if (confirmLowercase) {
        user_choices = alpha;
    }
    // Created upper_space variable to fill uppercase conversion
    else if (confirmUppercase) {
        user_choices = upper_space.concat(alpha2);
    };

    // this is for the total length that the user chose
    var password = [];

    // Random selection for all variables:
    for (var i = 0; i < enter; i++) {
        var pickuser_choices = user_choices[Math.floor(Math.random() * user_choices.length)];
        password.push(pickuser_choices);
    }
    // This joins the password and converts it to a string
    var secured_pass = password.join("");
    UserInput(secured_pass);
    return secured_pass;
}
// display the secured password
function UserInput(secured_pass) {
    document.getElementById("password").textContent = secured_pass;
}
