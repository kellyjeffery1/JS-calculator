function calc() {
  const a = parseInt(document.querrySelector('#value1').value);
  const b = parseInt(document.querrySelector('#value2').value);
  const op = document.querrySelector('#operator').value;
  var calculate;

  if (op == "add"){
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
 }
 document.querrySelector('#result').innerHTML = calculate;
}
