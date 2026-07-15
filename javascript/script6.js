let aluna = "Ana"
console.log("Aluno:",aluna)

const turma ="3 ano"
console.log("Turma:",turma)

let dia ="segunda"

switch(dia){
    case "segunda":
        console.log("Hoje tem matemática.")
        break

    case "terça":
        console.log("Hoje tem português.")
        break

    case "quarta":
        console.log("Hoje tem ciências.")
        break

    default:
        console.log("Não há aula cadastrada para esse dia.")
        break
}