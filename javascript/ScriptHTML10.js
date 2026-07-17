function ValidarIdade(){
    let idade = document.getElementById("idade").value

    if(idade==""){
        alert("Digite sua idade")
    }else if (idade<18){
        alert("Você é menor de idade.")
    }else{
        alert("Você é maior de idade")
    }
}