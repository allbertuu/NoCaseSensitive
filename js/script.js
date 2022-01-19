// o ID pode ser uma string ou array
function noCaseSensitive(ID) {
  var resultado = '';
  // etapa de verificação (cada caracter)
  for (var i = 0; i < document.getElementById(ID).value.length; i++) {
    // transformar e add na variável resultado
    switch (document.getElementById(ID).value[i]) {
      case "A":
        resultado += "a";
        break;
      case "B":
        resultado += "b";
        break;
      case "C":
        resultado += "c";
        break;
      case "D":
        resultado += "d";
        break;
      case "E":
        resultado += "e";
        break;
      case "F":
        resultado += "f";
        break;
      case "G":
        resultado += "g";
        break;
      case "H":
        resultado += "h";
        break;
      case "I":
        resultado += "i";
        break;
      case "J":
        resultado += "j";
        break;
      case "K":
        resultado += "k";
        break;
      case "L":
        resultado += "l";
        break;
      case "M":
        resultado += "m";
        break;
      case "N":
        resultado += "n";
        break;
      case "O":
        resultado += "o";
        break;
      case "P":
        resultado += "p";
        break;
      case "Q":
        resultado += "q";
        break;
      case "R":
        resultado += "r";
        break;
      case "S":
        resultado += "s";
        break;
      case "T":
        resultado += "t";
        break;
      case "U":
        resultado += "u";
        break;
      case "V":
        resultado += "v";
        break;
      case "W":
        resultado += "w";
        break;
      case "X":
        resultado += "x";
        break;
      case "Y":
        resultado += "y";
        break;
      case "Z":
        resultado += "z";
        break;
      // caracteres especiais
      case "Á":
        resultado += "á";
        break;
      case "À":
        resultado += "à";
        break;
      case "Â":
        resultado += "â";
        break;
      case "Ã":
        resultado += "ã";
        break;
      case "Ç":
        resultado += "ç";
        break;
      case "É":
        resultado += "é";
        break;      
      case "Ê":
        resultado += "ê";
        break;
      case "Í":
        resultado += "í";
        break;
      case "Ó":
        resultado += "ó";
        break;      
      case "Ô":
        resultado += "ô";
        break;
      case "Õ":
        resultado += "õ";
        break;
      case "Ú":
        resultado += "ú";
        break;
      case "Ü":
        resultado += "ü";
        break;
      default:
        resultado += document.getElementById(ID).value[i];
        break;
    }
  }
  // definição da utilização do valor na variável resultado
  document.getElementById("resultado").value = resultado;
}