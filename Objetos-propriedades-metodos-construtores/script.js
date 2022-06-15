// Objeto

// var aluno = {nome: 'Igor', notas:[7.5, 5.0]

// }

// console.log (aluno["notas"][1]);

// var NovaPropriedade = "Sobrenome";

// aluno.matricula = 12345;

// aluno[NovaPropriedade] = "Oliveira";

// console.log(aluno)

// ---------------------------------------------------------------------------


// Obrjetos - métodos

// var aluno = {
//     nome:"Igor", notas: [7, 8],

//     media: function (n1, n2) {
//         return (n1 + n2) / 2;
//     }

// }

// var aluno1 = {
//     nome:"João", notas: [8, 8],

//     media: function (n1, n2) {
//         return (n1 + n2) / 2;
//     }

// }

// console.log(aluno.nome)
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));


// console.log(aluno1.nome)
// console.log(aluno.media(aluno1.notas[0], aluno1.notas[1]));

//--------------------------------------------------------------------------

// Objetos - construtores

var calcMedia = function(){
    return(this.nota1 + this.nota2) / 2;
}

var turma = [ {nome:"Pedro", nota1:10, nota2:5, media:calcMedia
},


]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());