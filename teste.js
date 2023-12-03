
somar(10)//<==digite o número aqui
function somar (value) { 

    let mult3 = 0 //representa os números divisiveis por 3
    let mult5 = 0 //representa os números divisiveis por 5
    let mult = mult3 || mult5 //variável hibrida, recebe o valor das variáveis
   
    for(i = 0; i < value; i++) { //faz a varredura do zero até o número inserido, verifica se é divisivél por 3 ou 5 e retorna para o loop, caso contrário executa o console
        if (i % 3 === 0 || i % 5 === 0) {
              mult += i//soma todos os números
              console.log(i)//mostra os números somados         
        } 
    }
    console.log('O resultado é: ' + mult) //mostra o resultado da soma
    } 
    


