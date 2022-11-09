let myForm = document.forms.loginForm;

// for letters only validation
let letters = /^[A-Za-z\s]+$/;

// LEFT CARD DISPLAY
let cardNoDisplay = document.getElementById("cardNoDisplay");
let nameDisplay = document.getElementById("nameDisplay");
let cardExpDateDisplay = document.getElementById("cardExpDateDisplay");
let cardCvcDisplay = document.getElementById("cardCvcDisplay");

// INPUT VARIABLES
let fullName = document.getElementById("fullName");
let cardNo = document.getElementById("cardNo");
let expMm = document.getElementById("expMm");
let expYy = document.getElementById("expYy");
let cvc = document.getElementById("cvc");

// ERROR MESSAGE VARIABLES
let fNameError = document.getElementById("fNameError");
let cardNoError = document.getElementById("cardNoError");
let expDateError = document.getElementById("expDateError");
let cvcError = document.getElementById("cvcError");
let fNameStatus,
  cardNoStatus,
  expMmStatus,
  expYyStatus,
  cvcStatus = false;

// AFTER COMPLETED FORM
let completeStatus = document.getElementById("completeStatus");
let continueBtn = document.getElementById("continueBtn");
completeStatus.style.display = "none";

fNameError.style.display = "none";
cardNoError.style.display = "none";
expDateError.style.display = "none";
cvcError.style.display = "none";

let confirmBtn = document.getElementById("confirmBtn");

// VALIDATION WHEN CLICK CONFIRM BUTTON
confirmBtn.addEventListener("click", function () {
  checkValidation(fullName, cardNo, expMm, expYy, cvc);

  if (
    !fNameStatus &&
    !cardNoStatus &&
    !expMmStatus &&
    !expYyStatus &&
    !cvcStatus
  ) {
    myForm.style.display = "none";
    completeStatus.style.display = "block";
    nameDisplay.innerHTML = fullName.value;
    cardNoDisplay.innerHTML = cardNo.value;
    cardExpDateDisplay.innerHTML = expMm.value + "/" + expYy.value;
    cardCvcDisplay.innerHTML = cvc.value;
  }
});

// FOR INPUT VALIDATION
function checkValidation(fullName, cardNo, expMm, expYy, cvc) {
  // for only alphabetic input
  if (fullName.value.match(letters)) {
    fNameError.style.display = "none";
    fullName.style.border = "0.5px solid #dedddf";
    fNameStatus = false;
  } else {
    fNameError.innerHTML = "Wrong format, letters only!";
    fNameError.style.display = "block";
    fullName.style.border = "0.5px solid #ff5252";
    fNameStatus = true;
  }

  // FOR CARD NUMBER

  if (cardNo.value.length !== 16) {
    cardNoError.style.display = "block";
    cardNoError.innerHTML = "Wrong format (must contain 16 numbers)!";
    cardNo.style.border = "0.5px solid #ff5252";
    cardNoStatus = true;
  } else if (isNaN(cardNo.value)) {
    cardNoError.style.display = "block";
    cardNoError.innerHTML = "Wrong format (numbers only)!";
    cardNo.style.border = "0.5px solid #ff5252";
    cardNoStatus = true;
  } else {
    cardNoError.style.display = "none";
    cardNo.style.border = "0.5px solid #dedddf";
    cardNoStatus = false;
  }

  // FOR CARD EXP MONTH
  if (expMm.value.length > 2 || expMm.value <= 0 || expMm.value > 12) {
    expMm.style.border = "0.5px solid #ff5252";
    expMmStatus = true;
  } else {
    expMm.style.border = "0.5px solid #dedddf";
    expMmStatus = false;
  }
  // FOR CARD EXP YEAR
  if (expYy.value.length != 2 || expYy.value <= 0 || expYy.value > 99) {
    expYy.style.border = "0.5px solid #ff5252";
    expYyStatus = true;
  } else {
    expYy.style.border = "0.5px solid #dedddf";
    expYyStatus = false;
  }
  // TWO INPUTS | ONE ERROR MESSAGE
  if (expMmStatus == true && expYyStatus == true) {
    expDateError.style.display = "block";
    expDateError.innerHTML =
      "Wrong format (MM must be within 1 to 12 and YY must be two positive numbers under 100)!";
  } else if (expMmStatus == true) {
    expDateError.style.display = "block";
    expDateError.innerHTML = "Wrong format (MM must be within 1 to 12)!";
  } else if (expYyStatus == true) {
    expDateError.style.display = "block";
    expDateError.innerHTML =
      "Wrong format (YY must be two positive numbers under 100)!";
  } else {
    expDateError.style.display = "none";
  }

  // CVC
  if (cvc.value.length != 3) {
    cvcError.innerHTML = "CVC must have 3 numbers!";
    cvcError.style.display = "block";
    cvc.style.border = "0.5px solid #ff5252";
    cvcStatus = true;
  } else if (cvc.value < 0) {
    cvcError.innerHTML = "CVC must be greater than 0!";
    cvcError.style.display = "block";
    cvc.style.border = "0.5px solid #ff5252";
    cvcStatus = true;
  } else {
    cvcError.style.display = "none";
    cvc.style.border = "0.5px solid #dedddf";
    cvcStatus = false;
  }
}
