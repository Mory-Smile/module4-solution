var names = ["Ahmed", "Ali", "Jamal"];

for (var i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
  var value = names[i];
  if ((value = "Jamal")) {
    // If value starts with "J"
    console.log("Goodbye Jamal");
  }
}
