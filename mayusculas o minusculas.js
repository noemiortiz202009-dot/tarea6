function frases() {
    var mayuscula = 0;
    var minuscula = 0;
    var texto = prompt("Ingrese una palabra:");
    mayuscula = 0;
    minuscula = 0;
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);

        if (letra >= "A" && letra <= "Z") {
            mayuscula++;
        } else if (letra >= "a" && letra <= "z") {
            minuscula++;
        }
    }
    if (mayuscula > 0 && minuscula === 0) {
        alert("La palabra '" + texto + "' esta formada solo por mayusculas.");
    } else if (minuscula > 0 && mayuscula === 0) {
        alert("La palabra '" + texto + "' esta formada solo por minusculas.");
    } else if (mayuscula > 0 && minuscula > 0) {
        alert("La palabra '" + texto + "' es una mezcla de ambas.");
    } 
}
texto();
