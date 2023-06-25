const palavrasForca = ['BRASIL', 'NORUEGA', 'AUSTRIA', 'FRANÇA', 'ARGENTINA', 'URUGUAY', 'CHILE', 'MOÇAMBIQUE', 'CHINA', 'PERU'];


var vidas = 6;
var letrasCorretas = [];
var palavraAleatoria = Math.floor(Math.random() * palavrasForca.length);
var palavra = palavrasForca[palavraAleatoria];

for (var i = 0; i < palavra.length; i++) {
    document.getElementById("palavra-escolhida").innerHTML += `<span style="margin-left:15px;" class="underscore underscore${i}">_</span>`;
}

document.addEventListener("keyup", function (event) {
    var letraDigitada = event.key.toUpperCase();
    var keyCode = event.keyCode;


    if ((keyCode >= 65 && keyCode <= 90) || keyCode === 186) {
        console.log(letraDigitada)
        if (palavra.includes(letraDigitada)) {
            for (let a = 0; a < palavra.length; a++) {
                if (letraDigitada === palavra[a]) {
                    var alteraUnderscore = document.getElementsByClassName(`underscore${a}`)[0];
                    alteraUnderscore.innerHTML = letraDigitada;
                    // console.log(alteraUnderscore);

                }
            }
        }else{
        document.getElementById("letras-incorretas").innerHTML += letraDigitada+",";
        }
    } else {
        console.log(event);
    }
});

function mostraDica() {
    alert("A resposta é ' " + palavra + " '")
    console.log(palavra);
};
