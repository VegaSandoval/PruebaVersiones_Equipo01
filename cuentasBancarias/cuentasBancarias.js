var teoriaN1 = [
    "Una cuenta de ahorro es un producto financiero que permite depositar y custodiar tu dinero de forma segura, generando rentabilidad mediante intereses.",
    "Sirve para resguardar tu dinero, evitar pérdidas y gastos innecesarios.",
    "Permite retirar fondos cuando lo necesites, aunque puede haber límites o condiciones.",
    "Genera intereses: el banco te paga un porcentaje por mantener tu dinero allí.",
    "Ofrece liquidez: puedes usar el dinero cuando lo necesites, aunque puede haber restricciones.",
    "Pasos para abrir una cuenta de ahorro: elegir institución, revisar requisitos, leer el contrato, firmar y depositar.",
    "Requisitos comunes: identificación oficial, comprobante de domicilio, CURP/RFC, edad mínima, depósito inicial.",
    "Consideraciones importantes: comisiones, límites de operación, condiciones de interés, liquidez.",
    "Tipos de cuenta: con chequera, sin chequera, programada o de metas.",
    "Términos clave: intereses variables, comisiones, límites de retiro, liquidez inmediata, seguridad.",
    "Costos a considerar: comisión por mantenimiento, inactividad, saldos bajos, tasa de interés, CAT."
];

var preguntasN1 = [
    //preguntas para cuentas de ahorro
  {
    texto: "Una cuenta de ahorro solo sirve para guardar dinero y no genera ningún tipo de rendimiento.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    texto: "Para abrir una cuenta de ahorro es necesario presentar una identificación oficial y un comprobante de domicilio.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    texto: "¿Cuál de las siguientes opciones describe mejor una cuenta de ahorro?",
    opciones: [
      "Una cuenta para pagar con cheques y recibir depósitos de nómina.",
      "Una cuenta que permite ahorrar dinero, obtener intereses y retirar cuando sea necesario.",
      "Una cuenta exclusiva para préstamos bancarios.",
      "Una cuenta sin acceso a tu dinero hasta los 5 años."
    ],
    correcta: 1
  },
  {
    texto: "¿Qué documento es importante leer antes de firmar al abrir tu primera cuenta bancaria?",
    opciones: [
      "El comprobante de domicilio.",
      "El contrato o documento de adhesión del banco.",
      "Tu historial crediticio.",
      "El estado de cuenta mensual."
    ],
    correcta: 1
  },
  {
    texto: "Todas las cuentas de ahorro permiten hacer retiros ilimitados sin costo.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    texto: "Según CONDUSEF, ¿qué significa comisión por inactividad?",
    opciones: [
      "El cobro por usar demasiado la cuenta.",
      "El cobro por no tener movimientos durante cierto tiempo.",
      "El interés que te paga el banco por ahorrar.",
      "Un beneficio que otorgan por no usar la cuenta."
    ],
    correcta: 1
  },
  {
    texto: "Laura abrió su primera cuenta de ahorro y el banco le cobra una comisión mensual de $15 por mantenimiento. Esto significa que:",
    opciones: [
      "Le descuentan $15 cada mes por tener activa su cuenta.",
      "Le pagan $15 mensuales como premio por ahorrar.",
      "Solo debe pagar si retira dinero.",
      "Es un error del sistema."
    ],
    correcta: 0
  },
  {
    texto: "El dinero depositado en una cuenta de ahorro está protegido si el banco está regulado por autoridades financieras.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0
  }

];

//funcion para pasar de la portada a lo teorico
function iniciarModulo(){
    document.getElementById("portada").style.display = "block";
    document.getElementById("teoria").style.display = "none";

    setTimeout(() =>{
        document.getElementById("portada").style.display = "block";
        document.getElementById("teoria").style.display = "none";
        mostrarTeoriaN1();
    }, 2500);
}

//funcion para mostrar la teoria del N1
function mostrarTeoriaN1(){
    const contenedor = document.getElementById("contenido-teorico");
}

let respuestasUsuario = []; //para guardar lo que selecciono el usuario

//puntos por respuesta correcta
let puntaje = 0;

let respuestasCorrectas = 0;

//Funcion para verificar la respuesta
function verificarRespuesta(indexPregunta, opcionSelec){
    const pregunta = preguntas[indexPregunta];

    respuestasUsuario[indexPregunta] = opcionSelec;

    if(opcionSelec === pregunta.correcta){
        puntaje += 10;
        respuestasCorrectas++;
        mostrarRetroalimentacion("¡Correcto! +10 puntos", true);
    } else{
        mostrarRetroalimentacion("Incorrecto. La respuesta correcta era: "+ co, false)
    }
    actualizarPuntaje();
    actualizarBarraProgreso();

    return pregunta.correcta === opcionSelec;
}

//funciones para la barra de progreso
function actualizarPuntaje(){
    document.getElementById("puntaje").textContent = "Puntaje: " + puntaje;
}

function actualizarBarraProgreso(){
    const totalPreguntas = preguntas.length;
    const porcentaje = Math.round((respuestasCorrectas / totalPreguntas)* 100);
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
    document.getElementById("porcentaje").textContent = porcentaje + "%";
}

//funcion para mostrar la retroalimentacion
function mostrarRetroalimentacion(mensaje, esCorrecto){
    const cartel = document.getElementById("retro");
    cartel.textContent = mensaje;
    cartel.style.color = esCorrecto ? "green" : "red";
}


//necesitamos una funcion que se encargue de mostrar la pregunta
function mostrarPregunta(indexPregunta){
    const pregunta = preguntas[indexPregunta];
    document.getElementById("pregunta").textContent = pregunta.texto;

    const listaOpciones = document.getElementById("lista-opciones");
    listaOpciones.innerHTML= "";

    pregunta.opciones.forEach((opcion,i) => {
        const li = document.createElement("li");
        li.textContent = opcion;
        li.onclick = () => {
            respuestasUsuario[indexPregunta] = i;
            mostrarCartelGanador();
        };
        listaOpciones.appendChild(li);
    });
        
}

function checarSiGano(){
    for(var i = 0; i < preguntas.length; i++){
        if(respuestasUsuario[i] !== preguntas[i].correcta){
            return false;
        }
    }
    return true;
}

//mostrar en html si se gano
function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("Felicidades, ganaste el juego");
    }
}



