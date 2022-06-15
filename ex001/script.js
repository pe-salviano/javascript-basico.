// Criação sistema de média do aluno (Nome do aluno - nota 1 - nota 2 - média - aprovado / reprovado)


var nome =["Pedro","Jéssica", "Dalva"];
var notaA = [7.0, 6.5, 9.5];
var notaB = [8.0, 7.0, 8.5];

function media (n1, n2){
    return (n1 + n2)/2

}

function passou(media) {
    
    if (media > 7){
        return 'Aprovado';
    }else{
        return 'Reprovado';
    }
}
    

for (var index in nome){
    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2);

    console.log(nome[index]+ 
        ' - ' +
        nota1 +
        ' - ' +
        nota2 +
        ' - ' +
        m +
        ' - ' +
        passou(m));
}
