function ValidarNome(){
    let nome = document.getElementById("nome").value

    if(nome == ""){
        alert("Digite seu nome.")
    }else{
        alert("Cadastro realizado com sucesso!")
    }
}