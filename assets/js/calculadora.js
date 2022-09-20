function somaDigitos() {
  const d1 = parseFloat(document.getElementById("digito1").value);
  const d2 = parseFloat(document.getElementById("digito2").value);
  document.getElementById("result-sum").innerHTML = d1 + d2;
}