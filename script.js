// ==========================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================
const btnChatbot = document.getElementById('btn-chatbot');
const btnCerrarChat = document.getElementById('btn-cerrar-chat');
const ventanaChatbot = document.getElementById('ventana-chatbot');

const chatInput = document.getElementById('chat-input');
const btnEnviar = document.getElementById('btn-enviar');
const chatMensajes = document.getElementById('chat-mensajes');


// ==========================================
// 2. ABRIR Y CERRAR LA VENTANA DEL CHATBOT
// ==========================================
btnChatbot.addEventListener('click', () => {
  ventanaChatbot.classList.toggle('oculto');
});

btnCerrarChat.addEventListener('click', () => {
  ventanaChatbot.classList.add('oculto');
});


// ==========================================
// 3. LOGICA DE INTERACCIÓN DEL CHATBOT
// ==========================================

// Función para procesar y enviar mensajes
function enviarMensaje() {
  const textoUsuario = chatInput.value.trim();

  // Si el usuario no escribió nada, no hace nada
  if (textoUsuario === "") return;

  // Agregar el mensaje del usuario a la pantalla
  agregarMensajePantalla(textoUsuario, 'usuario');
  chatInput.value = ""; // Limpiar el input

  // Esperar un breve momento (simular que el bot piensa) para responder
  setTimeout(() => {
    const respuestaBot = generarRespuestaBot(textoUsuario);
    agregarMensajePantalla(respuestaBot, 'bot');
  }, 600);
}

// Escuchar el clic en el botón de enviar
btnEnviar.addEventListener('click', enviarMensaje);

// Permitir enviar el mensaje presionado la tecla "Enter"
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    enviarMensaje();
  }
});


// ==========================================
// 4. REGLAS DE RESPUESTAS DEL CHATBOT
// ==========================================
function generarRespuestaBot(mensaje) {
  // Convertimos el mensaje a minúsculas para facilitar la comparación
  const texto = mensaje.toLowerCase();

  // Reglas de respuesta basadas en palabras clave:
  if (texto.includes('Buenas') || texto.includes('Holiii')) {
    return "¡Hola! ¿Cómo estás? ¿En qué puedo ayudarte hoy? ¿Te interesa algunos de nuestros viajes?";
  } 
  else if (texto.includes('boletos') || texto.includes('eventos') || texto.includes('lugares')) {
    return "Nuestros viajes incluyen con dinamicas divertidas y una amplia comodidad en cada area. ¿Te interesa un viaje exclusivo?  .";
  } 
  else if (texto.includes('horario') || texto.includes('base')) {
    return "Atendemos de Lunes a Viernes de 7:00 am a 8:00 pm. y nos encontramos en la calle del Rarranyo el sol";
  } 
  else if (texto.includes('contacto') || texto.includes('telefono') || texto.includes('correo')) {
    return "Puedes escribirnos a contacto: piedradelSOL.com o llamarnos al 55-1234-5678.";
  } 
  else if (texto.includes('gracias senpai')) {
    return "¡Gracias a ti por contactar con nosotros";
  } 
  else {
    // Respuesta por defecto si no reconoce ninguna palabra clave
    return "No entendí bien tu consulta.¿Me personas? Intenta preguntarme por horario, precios o contacto.";
  }
}


// Función auxiliar para insertar las burbujas de texto en el chat
function agregarMensajePantalla(texto, emisor) {
  const divMensaje = document.createElement('div');
  divMensaje.classList.add('mensaje', emisor);
  divMensaje.textContent = texto;

  chatMensajes.appendChild(divMensaje);

  // Desplazar automáticamente el chat hacia abajo
  chatMensajes.scrollTop = chatMensajes.scrollHeight;
}