let valor = Number(prompt('Insira o valor desejado: '))

const nota50 = 50
const nota10 = 10
const nota5 = 5
const nota1 = 1

while (valor > 0) {
    if (valor >= nota50){
        let quantidade = parseInt(valor / 50);
        document.write(`GC$ 50,00 -> ${quantidade} </br>`);
        valor -= quantidade * 50;
    } 
    else if (valor >= nota10){
        let quantidade = parseInt(valor / 10);
        document.write(`GC$ 10,00 -> ${quantidade} </br>`);
        valor -= quantidade * 10;
    } 
    else if (valor >= nota5){
        let quantidade = parseInt(valor / 5);
        document.write(`GC$ 5,00 -> ${quantidade} </br>`);
        valor -=quantidade * 5;
    } 
    else if (valor >= nota1) {
        let quantidade = parseInt(valor / 1);
        document.write(`GC$ 1,00 -> ${quantidade} </br>`);
        valor -=quantidade * 1;
    }
}


