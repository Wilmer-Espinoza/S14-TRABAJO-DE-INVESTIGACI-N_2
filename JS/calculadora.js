class Calculadora {
    limpiar() {
        let d = document
        d.getElementById("result").value = ""
    }
    isBuscado(arr, buscar) {
        let pos = 0, enc = 0

        while (pos < arr.length && enc == 0) {
            if (arr[pos] == buscar) {
                enc = 1
            } else {
                pos += 1
            }
        }
        if (enc == 1) {
            return pos
        } else {
            return -1
        }
    }

   
    isPalabras(frase) {
        let cp = 1
        frase = frase.trim()
        for (let pos = 0; pos < frase.length; pos++) {

            if (frase[pos] == ' ' && frase[pos + 1] != ' ') {
                cp += 1
            }
        }
        return cp
    }

    isCopiarCaracteres(frase, car) {
        let copia = ""
        frase = frase.trim()
        for (let pos = 0; pos < frase.length; pos++) {
            if (frase[pos] == car) {
                copia = copia + frase[pos]
            }
        }
        return copia
    }

    isDivisor(arr, divisor) {
        let divisores = [], pos2 = 0
        for (let pos = 0; pos < arr.length; pos++) {
            let num = parseInt(arr[pos])
            if (num % divisor == 0) {
                divisores.push(num)

            }

        }
        return divisores
    }
    isExponente(base, exp) {
        let res = 1
        for (let i = 1; i <= exp; i++) {
            res *= base
        }
        return res
    }
    isDigitos(numero, base) {
        let digitos = []
        while (numero > 0) {
            digitos.push(numero % base)
            numero = parseInt(numero / base)
        }
        return digitos
    }
    base10_2() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 2)
        let base2 = ""
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base2 = base2 + arreglo[i].toString()
        }
        $input.value = `[Base10=${numero}] ==> Base2=${base2}`

    }
    base10_16() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 16)
        let base2 = ""
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base2 = base2 + arreglo[i].toString(16).toUpperCase()
        }
        $input.value = `[Base10=${numero}] ==> Base16=${base2}`

    }
    base10_8() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 8)
        let base2 = ""
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base2 = base2 + arreglo[i].toString()
        }
        $input.value = `[Base10=${numero}] ==> Base8=${base2}`

    }

    base2_10() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 10)
        let base10 = 0, limite = arreglo.length - 1
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base10 = base10 + arreglo[i] * this.isExponente(2, limite)
            limite = limite - 1
        }
        $input.value = `[Base2=${numero}] ==> Base2=${base10}`
    }
    base2_16() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 10)
        let base10 = 0, limite = arreglo.length - 1
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base10 = base10 + arreglo[i] * this.isExponente(2, limite)
            limite = limite - 1
        }
        $input.value = `[Base2=${numero}] ==> Base16=${base10.toString(16).toUpperCase()}`
    }
    base2_8() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let arreglo = this.isDigitos(numero, 10)
        let base10 = 0, limite = arreglo.length - 1
        for (let i = arreglo.length - 1; i >= 0; i--) {
            base10 = base10 + arreglo[i] * this.isExponente(2, limite)
            limite = limite - 1
        }
        $input.value = `[Base2=${numero}] ==> Base8=${base10.toString(8)}`
    }

    baseNaN() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let base = parseFloat(prompt("Ingrese base la base 10 o 2"))
        let convertirBase = parseFloat(prompt("Ingrese base a covertir 2-8-10-16"))
        if (!base || isNaN(base) || !convertirBase || isNaN(convertirBase)) {
            $input.value = " ";
            return;
        }
        if (base == 10 && convertirBase == 2) {
            let arreglo = this.isDigitos(numero, 2)
            let base2 = ""
            for (let i = arreglo.length - 1; i >= 0; i--) {
                base2 = base2 + arreglo[i].toString(2)
            }
            $input.value = `[Base10=${numero}] ==> Base2=${base2}`
        } else {
            if (base == 10 && convertirBase == 8) {
                let arreglo = this.isDigitos(numero, 8)
                let base8 = ""
                for (let i = arreglo.length - 1; i >= 0; i--) {
                    base8 = base8 + arreglo[i].toString()
                }
                $input.value = `[Base10=${numero}] ==> Base8=${base8}`

            } else {
                if (base == 10 && convertirBase == 16) {
                    let arreglo = this.isDigitos(numero, 16)
                    let base16 = ""
                    for (let i = arreglo.length - 1; i >= 0; i--) {
                        base16 = base16 + arreglo[i].toString(16).toUpperCase()
                    }
                    $input.value = `[Base10=${numero}] ==> Base16=${base16}`
                } else {
                    if (base == 2 && convertirBase == 8) {
                        let arreglo = this.isDigitos(numero, 10)
                        let base10 = 0, limite = arreglo.length - 1
                        for (let i = arreglo.length - 1; i >= 0; i--) {
                            base10 = base10 + arreglo[i] * this.isExponente(2, limite)
                            limite = limite - 1
                        }
                        $input.value = `[Base2=${numero}] ==> Base8=${base10.toString(8)}`
                    } else {
                        if (base == 2 && convertirBase == 10) {
                            let arreglo = this.isDigitos(numero, 10)
                            let base10 = 0, limite = arreglo.length - 1
                            for (let i = arreglo.length - 1; i >= 0; i--) {
                                base10 = base10 + arreglo[i] * this.isExponente(2, limite)
                                limite = limite - 1
                            }
                            $input.value = `[Base2=${numero}] ==> Base10=${base10}`
                        } else {
                            if (base == 2 && convertirBase == 16) {
                                let arreglo = this.isDigitos(numero, 10)
                                let base10 = 0, limite = arreglo.length - 1
                                for (let i = arreglo.length - 1; i >= 0; i--) {
                                    base10 = base10 + arreglo[i] * this.isExponente(2, limite)
                                    limite = limite - 1
                                }
                                $input.value = `[Base2=${numero}] ==> Base16=${base10.toString(16).toUpperCase()}`
                            }
                        }
                    }
                }
            }
        }
    }
    dar_Vuelto() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        let arreglo = [];
    
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
    
        if (numero < 100) {
            let billetes50 = Math.floor(numero / 50);
            numero = numero % 50;
            if (billetes50 > 0) {
                arreglo.push(billetes50 + " de $50");
            }
    
            let billetes20 = Math.floor(numero / 20);
            numero = numero % 20;
            if (billetes20 > 0) {
                arreglo.push(billetes20 + " de $20");
            }
    
            let billetes10 = Math.floor(numero / 10);
            numero = numero % 10;
            if (billetes10 > 0) {
                arreglo.push(billetes10 + " de $10");
            }
    
            let billetes5 = Math.floor(numero / 5);
            numero = numero % 5;
            if (billetes5 > 0) {
                arreglo.push(billetes5 + " de $5");
            }
    
            let billete1 = numero;
            if (billete1 > 0) {
                arreglo.push(billete1 + " de $1");
            }
    
            if (arreglo.length > 0) {
                $input.value = "Los billetes son: " + arreglo.join(", ");
            } else {
                $input.value = "No hay billetes";
            }
        } else {
            $input.value = "Ingresaste una cantidad mayor o igual 100 dolares";
        }
    }
    convertirARomano() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (!numero || isNaN(numero)) {
            $input.value = " ";
            return;
        }
        let unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let decenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        if (numero < 1 || numero > 99) {
            $input.value = "El número debe ser mayor a 0 y menor a 100";
        }else{

            let decena = Math.floor(numero / 10);
            let unidad = numero % 10;
            $input.value = decenas[decena] + unidades[unidad];
        }

    }
    encontrarSubcadena(cadena, subcadena) {
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === subcadena[0]) {
                let coincidencia = true;
                for (let j = 1; j < subcadena.length; j++) {
                    if (cadena[i + j] !== subcadena[j]) {
                        coincidencia = false;
                        break;
                    }
                }
                if (coincidencia) {
                    return i;
                }
            }
        }
        return -1;
    }

    BuscarCadena() {
        let $input = document.getElementById("result")
        let cadena = $input.value
        if (cadena == null || cadena.trim() === "") { 
            return; 
        }
        let buscado = prompt("Ingrese dato a buscar")
        
        let llamar = this.encontrarSubcadena(cadena, buscado)
        if (llamar >= 0) {
            $input.value = ("[" + buscado + "]" + " se encuentra en la posicion " + llamar)
        } else {
            $input.value = ("-1")
        }
    }
    retornarMayor(arreglo) {
        let maximo = arreglo[0]
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > maximo)
                maximo = arreglo[i]
        }
        return maximo

    }
    sacarMayor() {
        let $input = document.getElementById("result")
        let cadenaIngresada = $input.value.trim()
        if (cadenaIngresada == null || cadenaIngresada.trim() === "") { 
            return; 
        }
        let arregloNumeros =  this.miSplit(cadenaIngresada,",").map(n => Number(n))
        let llamar = this.retornarMayor(arregloNumeros)
        $input.value = ("el numero mayor del arreglo es: " + llamar)
    }
    
    retornarMenor(arreglo) {
        let menor = arreglo[0]
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] < menor)
                menor = arreglo[i]
        }
        return menor

    }
    sacarMenor() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado == null || arregloIngresado.trim() === "") { 
            return; 
        }
        arregloIngresado =  this.miSplit(arregloIngresado,",").map(n => Number(n))
        let llamar = this.retornarMenor(arregloIngresado)
        $input.value = ("el numero mayor del arreglo es: " + llamar)
    }
    buscaArreglo() {
        let $input = document.getElementById("result")
        let cadena = $input.value
        if (cadena.trim() === "") { 
            return; 
        }
        
        let arreglo =  this.miSplit(cadena,",")
        
        let buscado = prompt("Ingrese dato a buscar")
        if (buscado == null || buscado.trim() === "") { 
            return; 
        }
        let pos = this.isBuscado(arreglo, buscado)
        if (pos >= 0) {
            $input.value = `[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        } else {
            $input.value = `[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
    }
    Elemento(arreglo1, eliminado) {
        let arreglo = []
        for (let i = 0; i < arreglo1.length; i++) {
            if (arreglo1[i] !== eliminado) {
                arreglo.push(arreglo1[i])
            }
        }
        return arreglo
    }

    Eliminar() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado.trim() === "") { 
            return; 
        }
        
        arregloIngresado =  this.miSplit(arregloIngresado,",")
        
        let eliminar1 = prompt("Ingrese dato a buscar")
        if (eliminar1 == null || eliminar1.trim() === "") { 
            return; 
        }
        let llamar = this.Elemento(arregloIngresado, eliminar1)
        $input.value = ("[" + llamar + "]")

    }
    ordenarArreglo(arreglo) {
        let longitud = arreglo.length
        for (let i = 0; i < longitud - 1; i++) {
            for (let j = 0; j < longitud - i - 1; j++) {
                if (arreglo[j] > arreglo[j + 1]) {
                    let temporal = arreglo[j]
                    arreglo[j] = arreglo[j + 1]
                    arreglo[j + 1] = temporal
                }
            }
        }
        return arreglo
    }
    insertarElementos() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado.trim() === "") { 
            return; 
        }
       
        arregloIngresado = this.miSplit(arregloIngresado,",").map(n => Number(n))
        let ingresar = prompt("Ingrese dato")
        if (ingresar == null || ingresar.trim() === "") { 
            return; 
        }
        
        arregloIngresado.push(ingresar)
        let llamar = this.ordenarArreglo(arregloIngresado)
        $input.value = ("[" + llamar + "]")
    }
    miSplit(cadena, separador) {
        let arreglo = [];
        let subcadena = "";
      
        for (let i = 0; i < cadena.length; i++) {
          if (cadena[i] != separador) {
            subcadena += cadena[i];
          } else {
            arreglo.push(subcadena);
            subcadena = "";
          }
        }
      
        if (subcadena != "") {
          arreglo.push(subcadena);
        }
      
        return arreglo;
      }

    retornarAArreglo(arreglo, carac) {
        let arregloFinal = []
        for (let i = 0; i < arreglo.length; i++) {
            let elementos = this.miSplit(arreglo[i], carac)
            for (let j = 0; j < elementos.length; j++) {
                arregloFinal.push(parseInt(elementos[j]))
            }
        }
        return arregloFinal
    }
    convertirAArreglo() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado.trim() === "") { 
            return; 
        }
        let caracter = prompt("Ingresa el caracter")
        if (caracter == null || caracter.trim() === "") { 
            return; 
        }
        arregloIngresado =  this.miSplit(arregloIngresado,",")
        let llamar = this.retornarAArreglo(arregloIngresado, caracter)
        $input.value = "[" + llamar + "]"
    }
    retornarACadena(arreglo, carac) {
        let arregloFinal = []
        for (let i = 0; i < arreglo.length; i++) {
            let elementos = arreglo[i]
            arregloFinal.push(parseInt(elementos))

        }
        return arregloFinal.join(carac)
    }
    convertirACadena() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado.trim() === "") { 
            return; 
        }
        let caracter = prompt("Ingresa el caracter")
        if (caracter == null || caracter.trim() === "") { 
            return; 
        }
        arregloIngresado =  this.miSplit(arregloIngresado,",")
        let llamar = this.retornarAArreglo(arregloIngresado, caracter)
        $input.value = "[" + llamar + "]"
    }
    retornarMayuscula(cadena) {
        let palabras = this.miSplit(cadena," ");
        let oracion = ""
        for (let i = 0; i < palabras.length; i++) {
            let primeraLetra = palabras[i].charAt().toUpperCase()
            let restoPalabras = palabras[i].slice(1).toLowerCase()
            oracion += primeraLetra + restoPalabras + " "
        }
        return oracion

    }
    Mayuscula() {
        let $input = document.getElementById("result")
        let arregloIngresado = $input.value
        if (arregloIngresado == null || arregloIngresado.trim() === "") { 
            return; 
        } 
        
        let llamar = this.retornarMayuscula(arregloIngresado)
        $input.value = llamar
    }

    caracteresEspeciales() {
        let $input = document.getElementById("result")
        let cadenaIngresado = $input.value
        
        if (cadenaIngresado == null || cadenaIngresado.trim() === "") { 
            return; 
        }
        let contadorComas = 0, contadorPunto = 0, contadorDosPuntos = 0, contadorPuntoComa = 0
        for (let i = 0; i < cadenaIngresado.length; i++) {
            let caracter = cadenaIngresado[i]
            if (caracter == ",") {
                contadorComas++
            } else
                if (caracter == ".") {
                    contadorPunto++
                } else
                    if (caracter == ";") {
                        contadorPuntoComa++
                    } else
                        if (caracter == ":") {
                            contadorDosPuntos++
                        }

            $input.value = ("la frase tiene= " + contadorComas + " (,) " + contadorPunto + " (.) " + contadorPuntoComa + " (;)" + contadorDosPuntos + " (:)")
        }
    }
    sumarDigitosCadena() {
        let $input = document.getElementById("result")
        let numeroCadena = parseInt($input.value)
        if (numeroCadena == "") { 
            return; 
        }
        if (!numeroCadena || isNaN(numeroCadena)) {
            $input.value = " ";
            return;
        }
        let llamar = this.isDigitos(numeroCadena, 10)
        let acumulador = 0
        for (let i = 0; i < llamar.length; i++) {
            acumulador = acumulador + llamar[i]
        }
        $input.value = ("la suma de los digitos es: " + acumulador)
    }
}
let cal = new Calculadora()

