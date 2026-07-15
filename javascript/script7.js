let email = "david@gmail.com"
console.log("Email antigo:", email)

email = "davidalarcon@gmail.com"
console.log("Novo email:", email)

const datadenascimento = "04/07/2001"
console.log("Data de nascimento:", datadenascimento)

let Cadastrocerto = "ok"

switch(Cadastrocerto){
    case  "ok":
    console.log("Tudo certo com esse cadastro")
    break

    case "inativo":
    console.log("Cadastro inativo")
    break

    case  "bloqueado":
    console.log("Cadastro bloqueado")
    break

    default:
    console.log("Cadastro não encontrado")
    break
}