function ValidarSenha(){
   let senha = document.getElementById("senha").value;

    if(senha==""){
        alert("Digite a senha.");
    }else if(senha.length<6){
        alert("A senha deve ter pelo menos 6 caracteres.");
    }else{
        alert("Login realizado com sucesso!");
    }
}