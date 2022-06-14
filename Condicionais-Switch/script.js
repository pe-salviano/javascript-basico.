var nota1 = 6.5;
var nota2 = 6.5;

var media = (nota1 + nota2) / 2;
var conceito = ""

if (media >= 8.0) {
    conceito = "Ótimo";

}

else if (media >= 6.5) {
    conceito = "Bom";


}
else {
    conceito = "Regular";

}
conceito ="Mais ou Menos"


console.log(media);
console.log(conceito);

switch (conceito) {

    case "Ótimo":
        console.log("Parabéns, você foi aprovado com média:", media)
        break;

    case "Bom":
        console.log("Parabéns, você foi aprovado com média:", media)
        break;

    case "Regular":
        console.log("Você ficou de recuperação com média:", media)
        break;

    default:
        console.log("Houve um erro")
        break;
}




