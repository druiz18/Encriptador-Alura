function encriptar() {
    // Obtener el mensaje del textarea
    var mensaje = document.getElementById("mensaje").value;
    // Validar que el mensaje esté escrito en minúsculas y no tenga tildes
    if (/[^a-z ]/.test(mensaje)) {
        alert("El mensaje debe estar escrito en minúsculas y no debe tener tildes");
        return;
    }
    // Reemplazar las vocales por sus correspondientes encriptaciones
    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");          
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");
    // Mostrar el mensaje encriptado en el textarea
    document.getElementById("resultado").value = mensaje;
}
var btn = document.getElementById("encriptar");
btn.onclick = encriptar();

function desencriptar() {
    // Obtener el mensaje del textarea
    var mensaje = document.getElementById("mensaje").value;
    // Reemplazar las encriptaciones por sus correspondientes vocales
    mensaje = mensaje.replace(/enter/g, "e");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ufat/g, "u");
    // Mostrar el mensaje desencriptado en el textarea
    document.getElementById("resultado").value = mensaje;
}
var btn = document.getElementById("desencriptar");
btn.onclick = desencriptar();
