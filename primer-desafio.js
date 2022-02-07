let resultadoSigno = "";
let dia = "";
let mes = "";

dia = parseInt(prompt("Ingrese el dia de su nacimiento en números (solo el dia)"));

while (dia === "" || dia === null || isNaN(dia) || dia < 1 || dia > 31 ) {
    alert("Error, debe introducir un valor válido para día entre 1 y 31");
    dia = parseInt(prompt("Ingrese el dia de su nacimiento en números (solo el dia)"));
}

mes = parseInt(prompt("Ingrese su mes de nacimiento en números"));

while (mes === "" || mes === null || isNaN(mes) || mes < 1 || mes > 12 ) {
    alert("Error, debe introducir un valor válido para mes entre 1 y 12");
    mes = parseInt(prompt("Ingrese el mes de su nacimiento en números (solo el mes)"));
}

function zodiaco(dia, mes){
    let signo = "";
    if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        signo = "Aries";
        return signo;
    }
    else if((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)){
        signo ="Tauro";
        return signo;
    }
    else if((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)){
        signo = "Géminis";
        return signo;
    }
    else if((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)){
        signo = "Cáncer";
        return signo;
    }
    else if((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)){
        signo = "Leo";
        return signo;
    } 
    else if((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)){
        signo = "Virgo";
        return signo;
    }
    else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
        signo = "Libra";
        return signo;
    }
    else if((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)){
        signo = "Escorpio";
        return signo;
    }
    else if((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)){
        signo = "Sagitario";
        return signo;
    }
    else if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
        signo = "Capricornio";
        return signo;
    }
    else if((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)){
        signo = "Acuario";
        return signo;
    }
    else if((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)){
        signo = "Piscis";
        return signo;
    }
}

resultadoSigno = zodiaco(dia, mes);
alert(`Usted nació bajo el signo de ${resultadoSigno}`);