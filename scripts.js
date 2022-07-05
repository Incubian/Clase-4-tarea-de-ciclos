let año_string = prompt("introduzca un año");
let salida = null;
let año = parseInt (año_string);


for (let i=0 ; i<10 ; i++){
    if ((año+i) % 400 == 0) {
    salida = (año+i);
    break;
    } else if (((año + i) % 100 != 0) && ((año + i) % 4 == 0)){ 
    salida = (año+i);
    break;
    } else {salida = "No hay año bisiesto de aca a 100 años";}
}

alert (salida + " es el proximo bisiesto")