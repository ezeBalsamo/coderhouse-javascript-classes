let enteredNumber = parseFloat(prompt("Enter a number"));
if (enteredNumber > 1000) {
  alert(`${enteredNumber} is greater than 1000.`);
}

let enteredText = prompt("Enter a magic word");
if (enteredText === "Hola") {
  console.log("Congratulations, your guessed the keyword!");
}

let anotherEnteredNumber = parseFloat(prompt("Enter another number"));
if (10 <= anotherEnteredNumber && anotherEnteredNumber <= 50) {
  alert(`${anotherEnteredNumber} is between 10 and 50.`);
}
