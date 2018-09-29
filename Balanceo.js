var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


function Balanceo(texto){

    var expresion = texto.split('');
    var stack = []; 

    if (expresion.length == 0)
    {
        console.log("Ingresaste una cadena vacía");
    }

    else 
    {
        for(let i = 0; i < expresion.length; i++)
        {
            if(EsCaracter(expresion[i]))
            {
                if (EsApertura(expresion[i]))
                {

                    stack.push(expresion[i]);
                }
                else 
                {
                    if(stack.length == 0)
                    {
                        console.log("El archivo no está bien escrito :(");
                        return;
                    }

                    let cima = stack.pop();

                    if (!Match(cima, expresion[i]))
                    {
                        console.log("El archivo no está bien escrito :(");
                        return;
                    }
                }
            }
        }

        if (stack.length > 0 )
        {
            console.log("El archivo no está bien escrito :(");
            return;
        }

        console.log("El archivo SÍ está bien escrito :D")
    }
}

function EsCaracter(caracter){
    let cadena = "{}[]()";
    if (cadena.indexOf(caracter) > -1)
    {
        return true;
    }

    return false;
}

function EsApertura(caracter){
    let parentesis = '(';
    let llave = '{';
    let corchete = '[';

    if (caracter == parentesis || caracter == llave || caracter == corchete)
    {
        return true;
    }

    return false;
}

function Match(cima, caracter){
    if (cima == "{" && caracter == "}")
    {
        return true;
    }

    if (cima == "[" && caracter == "]")
    {
        return true;
    }

    if (cima == "(" && caracter == ")")
    {
        return true;
    }

    return false;
}

rl.question("Ingrese la cadena a verificar:", function(answer){
    Balanceo(answer);
    rl.close();
})