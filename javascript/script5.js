let nome = "Hiago"
console.log("Nome inicial do cadastro:",nome)

nome = "Hiago@novo"
console.log("Nome novo no cadastro:",nome)

const idade = 18
console.log("Idade:",idade)

let status = "ativo"

switch (status){
    case "ativo":
        console.log("Cadastro ativo")
        break

    case "inativo":
        console.log("Cadastro inativo")
        break

    case "bloqueado":
        console.log("Cadastro bloqueado")
        break

    default:
        console.log("Status inválido")
        break
}