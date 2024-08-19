const textoaEncriptar = document.getElementById("textoaEncriptar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonDecopiar = document.getElementById("botonDecopiar");
const advertencia = document.getElementById("advertencia");
const muñeco = document.getElementById("muñeco");
const infoDerecha = document.getElementById("infoDerecha");

let llaveEncriptado = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"]
]

const resultParcial= (nuevoValor)=> {
    advertencia.innerHTML = nuevoValor;
    muñeco.classList.add("ocultar");
    infoDerecha.style.display="none";
    botonDecopiar.style.display="block";
    advertencia.classList.add("ajustar");   
    textoaEncriptar.value="" ;
}

botonEncriptar.addEventListener("click",() => {
    const texto = textoaEncriptar.value.toLowerCase();
    function encriptar(textoResultado) {
        for (let i=0;i<llaveEncriptado.length;i++ ){
            if (textoResultado.includes(llaveEncriptado[i][0])){
                textoResultado = textoResultado.replaceAll(llaveEncriptado[i][0], llaveEncriptado[i][1])
            };
        };
        return textoResultado;
    }
    resultParcial(encriptar(texto));
})

botonDesencriptar.addEventListener("click",() => {
    const texto = textoaEncriptar.value.toLowerCase()
    function desencriptar(textoResultado) {
        for (let i=0;i<llaveEncriptado.length;i++ ){
            if (textoResultado.includes(llaveEncriptado[i][1])){
                textoResultado = textoResultado.replaceAll(llaveEncriptado[i][1], llaveEncriptado[i][0])
            };
        };
        return textoResultado;
    }
    resultParcial(desencriptar(texto));
})

botonDecopiar.addEventListener("click",()=>{
    let texto=advertencia;
    texto.select();
    document.execCommand('copy');
    alert ("Texto copiado");
    advertencia.innerHTML=""
    muñeco.classList.remove("ocultar");
    infoDerecha.style.display="block";
    botonDecopiar.style.display="none";
    advertencia.classList.remove("ajustar");   
    textoaEncriptar.focus();   

})




