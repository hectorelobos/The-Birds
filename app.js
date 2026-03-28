
const nombreClub = "The Birds FC";
const anioFundacion = 2009;

let cantidadSocios = 150;


function iniciarInteraccionSimple() {
    console.log("¡Se ha iniciado una interacción simple!");

    alert(`Hola, ¡bienvenido a la página de ${nombreClub}!`);

    let nombreUsuario = prompt("¿Cuál es tu nombre?") || "Amigo";
    console.log(`El usuario se llama: ${nombreUsuario}`); 
    alert(`Un gusto saludarte, ${nombreUsuario}.`); 

    let quiereSaberMas = confirm("¿Te gustaría saber un dato sobre la fundación del club?");

    if (quiereSaberMas) {
        alert(`The Birds FC fue fundado en el año ${anioFundacion}.`);
        console.log(`El usuario quiso saber más y se le informó sobre la fundación.`);
    } else {
        alert("¡No hay problema! Quizás la próxima vez.");
        console.log(`El usuario no quiso saber sobre la fundación.`);
    }

    console.log("Interacción simple finalizada.");
}


function mostrarBienvenidaEnH2(elementoH2, club) {
    let nombreVisitante = prompt("¡Hola! ¿Cómo te llamas?") || "Visitante";
    if (elementoH2) { 
        elementoH2.textContent = `¡Hola, ${nombreVisitante}! Bienvenido/a a ${club}.`;
        console.log(`Mensaje de bienvenida en H2 actualizado para ${nombreVisitante}.`);
    } else {
        console.warn("ADVERTENCIA: No se encontró el elemento H2 para el mensaje de bienvenida.");
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const mensajeBienvenidaElemento = document.getElementById('mensajeBienvenida');
    const botonInteractivo = document.getElementById('botonInteractivo');


    mostrarBienvenidaEnH2(mensajeBienvenidaElemento, nombreClub);

    if (botonInteractivo) { 
        botonInteractivo.addEventListener('click', iniciarInteraccionSimple);
        console.log("INFO: Botón interactivo listo para recibir clics.");
    } else {
        console.error("ERROR: No se encontró el botón con ID 'botonInteractivo'.");
    }
    console.log(`INFO: Página de ${nombreClub} cargada. ¡Listo para interactuar!`);
});
