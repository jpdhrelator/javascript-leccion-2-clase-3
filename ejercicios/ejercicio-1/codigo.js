// Año Bisiesto (Clásico) Bisiesto si divisible por 4 Y (NO divisible por 100 O divisible por 400).

let anio= 2028;

if( (anio % 4 == 0) && ( anio % 100 != 0 || anio % 400 == 0)) {
    console.log("El "+anio+"  Es Bisiesto");
}else {
    console.log("El "+anio+" No es Bisiesto");
}