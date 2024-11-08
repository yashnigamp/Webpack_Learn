document.getElementById("btn").addEventListener("click", () => {
  const result = sum(4, 5);
  document.getElementById("result").innerHTML = `Sum of 4 & 5 is ${result}`;
});
