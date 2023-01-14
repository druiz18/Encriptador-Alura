
async function copiar(){
    var mensaje = document.getElementById("resultado");
    var text = mensaje.value;

    await navigator.clipboard.writeText(text);
    alert("Mensaje copiado");
}

