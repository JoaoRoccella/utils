function somaDigitos() {
  const d1 = parseInt(document.getElementById("digito1").value);
  const d2 = parseInt(document.getElementById("digito2").value);
  document.getElementById("result-sum").innerHTML = d1 + d2;
}