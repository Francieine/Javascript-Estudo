/*
INFORMAÇÕES RELEVANTES

1) Em Orientação Orientada a Objetos Javascript utiliza-se: Objetos, Propriedades e Metódos
2) Os objetos criados interagem com outros objetos
3) Criação de objetos na forma literal: 
    var objeto = {
        propriedade:valor;
        propriedade:valor;
        propriedade:valor;
    };
4) Pode-se criar centenas de objetos utilizando "constructor function" que terá as mesmas propriedades do objeto inicial
5) Por padrão quando se cria uma "constructor function" escreve-se com letra maiuscula o nome do objeto
*/


var Carro = function(nome, cor, marca, ano){
    this.nome = nome;
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
};

var carro1 = new Carro ('Fusca', 'Amarelo', 'Volks', '1980');
var carro2 = new Carro ('Polo', 'Preto', 'Volks', '2022');
var carro3 = new Carro ('Palio', 'Cinza', 'Fiat', '2015');
var carro4 = new Carro ('Agile', 'Marrom', 'Chevrolet', '2016');


console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);
