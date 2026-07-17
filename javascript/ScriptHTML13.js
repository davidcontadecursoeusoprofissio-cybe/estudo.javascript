function Nomes() {
    let nome = document.getElementById("nome").value.trim()

    if (nome == "") {
        alert("Digite seu nome.")
    } else if (nome.length < 4) {
        alert("O nome tem que ter pelo menos 4 caracteres")
    } else {
        alert("Belo nome")
    }
}