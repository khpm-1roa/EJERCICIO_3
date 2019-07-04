//AUTOR:KEVIN PILLAJO
//DESCRIPCION:realizar el programa de euler numero3 el cual calculara los primos de un numero 

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Euler problema 3 </title>
</head>
<body>
 <h1>Project Euler problema 3
</h1>
  <h2>PILLAJO_KEVIN</h2>

</body>
<script>
   var final = 600851475143 ;
   var nu =1;
    var primos =[]
var mul=1;
var susecion = function (nu){
    if(mul===final){
        console.log("la suma de los numeros primos es :"+ mul);
        var maximo =primos [primos.lenght - 1];
        console.log("el mayor factor primo del numero"+final+ "es"+maximo+".");

    }else{
        if (final%nu===0){
            div1=(nu/2);
            if(div1%2===0 || div1%3===0){
                return ("error");

            }else{
                console.log(nu);
                primos.push(nu);
                mul*=nu;
            }
        }
    }
}
</SCRIPT>
</html>
