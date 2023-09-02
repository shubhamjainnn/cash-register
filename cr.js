var billAmount = document.getElementById("bill-amount");
var cashGiven = document.getElementById("cash-given");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var button = document.getElementById("btn");
var message = document.getElementById("error-mesage");
var availbleNotes = [2000, 500, 100, 20, 10, 5, 1];

button.addEventListener("click", function validateBillAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      var amountToBeReturn = cashGiven.value - billAmount.value;
      CalculateChange(amountToBeReturn);
    } else {
      showMessage("do you wana wash plates");
    }
  } else {
    showMessage("invalid bill amount");
  }
});

function CalculateChange(amountToBeReturn) {
  for (i = 0; i < availbleNotes.length; i++) {
    var numberOfnotes = Math.trunc(amountToBeReturn / availbleNotes[i]);
    amountToBeReturn = amountToBeReturn % availbleNotes[i];
    noOfNotes[i].innerText = numberOfnotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
