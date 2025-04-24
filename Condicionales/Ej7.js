// Función que verifica el acceso al portal web
function verificarAcceso(esFP, edad) {
    if (esFP && edad > 18) {
        console.log("Bienvenid@");
        return true;
    } else if (esFP && edad <= 18) {
        console.log("No tienes acceso al portal web.");
        return false;
    } else {
        console.log("Solo los alumnos de FP pueden acceder.");
        return false;
    }
}

// Ejemplo de uso
const alumno = {
    esFP: true,
    edad: 17
};

verificarAcceso(alumno.esFP, alumno.edad);
