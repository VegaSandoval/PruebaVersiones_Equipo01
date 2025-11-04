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

//variables
let preguntasSeleccionadas = [];
let indexPregunta = 0;
let puntaje = 0;
let respuestasCorrectas = 0;
let opcionSeleccionada = null;

//funcion para pasar de la portada a lo teorico
function iniciarModulo(){
    document.getElementById("portada").style.display = "none";
    document.getElementById("teoria").style.display = "block";
    mostrarTeoriaN1();
}


//funcion para mostrar la teoria del N1
function mostrarTeoriaN1(){
    const contenedor = document.getElementById("contenido-teorico");
    contenedor.innerHTML = ""; //para borrrar si ya se mostro antes

    teoriaN1.forEach((frase) => {
        const p = document.createElement("p");
        p.textContent = frase;
        contenedor.appendChild(p);
    });
}

//funcion para iniciar las preguntas
function iniciarPreguntas(){
    document.getElementById("teoria").style.display = "none";
    document.getElementById("preguntas").style.display = "block";

    preguntasSeleccionadas = seleccionarAleatorias(preguntasN1, 8);

    mostrarPregunta();
}

//funcion para seleccionar de manera aleatoria entre las preguntas que tenemos 
function seleccionarAleatorias(lista, cantidad){
    const copia = [...lista];
    const seleccionadas = [];
    
    while (seleccionadas.length < cantidad && copia.length > 0){
        const index = Math.floor(Math.random() * copia.length);
        seleccionadas.push(copia.splice(index, 1)[0]);
    }
    return seleccionadas
}

//necesitamos una funcion que se encargue de mostrar la pregunta
function mostrarPregunta(){
    const pregunta = preguntasSeleccionadas[indexPregunta];
    document.getElementById("pregunta").textContent = pregunta.texto;

    const listaOpciones = document.getElementById("lista-opciones");
    listaOpciones.innerHTML= "";

    pregunta.opciones.forEach((opcion,i) => {
        const li = document.createElement("li");
        li.textContent = opcion;
        li.onclick = () => {
      opcionSeleccionada = i;
      verificar();
    };
    listaOpciones.appendChild(li);
  });
}

//Funcion para verificar la respuesta
function verificar() {
    const pregunta = preguntasSeleccionadas[indexPregunta];

    if(opcionSelec === pregunta.correcta){
        puntaje += 10;
        respuestasCorrectas++;
        mostrarRetroalimentacion("¡Correcto! +10 puntos", true);
    } else{
        mostrarRetroalimentacion("Incorrecto. La respuesta correcta era: " + pregunta.opciones[pregunta.correcta], false);
    }
    actualizarPuntaje();
    actualizarBarraProgreso();

    indexPregunta++;
  setTimeout(() => {
    if(indexPregunta < preguntasSeleccionadas.length){
      mostrarPregunta();
    } else {
      alert("🎉 Nivel completado. Puntaje final: " + puntaje);
    }
  }, 1200);
}

//funcion para mostrar la retroalimentacion
function mostrarRetroalimentacion(mensaje, esCorrecto){
    const cartel = document.getElementById("retro");
    cartel.textContent = mensaje;
    cartel.style.color = esCorrecto ? "green" : "red";
}

//funciones para la barra de progreso
function actualizarPuntaje(){
    document.getElementById("puntaje").textContent = "Puntaje: " + puntaje;
}

function actualizarBarraProgreso(){
    const totalPreguntas = preguntasSeleccionadas.length;
    const porcentaje = Math.round((respuestasCorrectas / totalPreguntas)* 100);
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
    document.getElementById("porcentaje").textContent = porcentaje + "%";
}




