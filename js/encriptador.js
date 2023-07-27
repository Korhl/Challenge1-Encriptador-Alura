//*Formato del Texto1

const input = document.querySelector('[data-form-input]');
    const value = input.value; 
    input.value = "Ingrese su texto aquí" ;

const btn  = document.querySelector ('[data-form-btnE]');

document.getElementById('botonC').style.display = "none";
document.getElementById('desc').style.display = "block";

//Funciones para encriptar y desencriptar
const encriptar = (evento) => {
    evento.preventDefault();
    const figura = document.querySelector('mono');
    const textoAlterno = document.querySelector('[data-form-desc]')
    const input = document.querySelector('[data-form-input]');
    const answer = document.querySelector('[data-answer]');
    const value = input.value; 
    input.value = "" ;

    function reemplazarVocalesPorPalabra(value, mapeo) {
        const vocalesRegex = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/g;

        document.getElementById('mono').style.display = "none";
        document.getElementById('desc').style.display = "none";

        return value.replace(vocalesRegex, vocal => mapeo[vocal.toLowerCase()] || vocal);
      };
      
      const textoOriginal = value;
      const mapeoVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
      };
      
      const textoModificado = reemplazarVocalesPorPalabra(textoOriginal, mapeoVocales);
      
      console.log(textoModificado);

    const content = `<span class="respuesta" type="text" id="respuesta" type="text">${textoModificado}</span>`;
    answer.innerHTML = content;
    

    //añadir elemento de botón copiar
    document.getElementById('botonC').style.display = "block";
};

const btnD = document.querySelector('[data-form-btnD]');

  const desencriptar = (evento) => {
      evento.preventDefault();
      const figura = document.querySelector('mono');
      const textoAlterno = document.querySelector('[data-form-desc]')
      const input = document.querySelector('[data-form-input]');
      const answer = document.querySelector('[data-answer]');
      const value = input.value; 
      input.value = "";

      function reemplazarPalabraPorVocales(value, mapeo) {

          const palabraABuscar = 'ai|enter|imes|ober|ufat|';
          const PalabrasRegex = new RegExp(palabraABuscar + '/(\ba)', 'gi');

          console.log(PalabrasRegex);

          document.getElementById('mono').style.display = "none";
          document.getElementById('desc').style.display = "none";

          return value.replace(PalabrasRegex, vocal => mapeo[vocal.toLowerCase()] || vocal);
        };
        
        const textoEncriptado = value;
        const mapeoVocales = {
            'ai' : 'a',
          'enter' : 'e',
          'imes'  : 'i',
          'ober'  : 'o',
          'ufat'  : 'u',

        };
        
        const textoModificado = reemplazarPalabraPorVocales(textoEncriptado, mapeoVocales);

        console.log(textoModificado);

      const content = `<span class="respuesta" type="text" id="respuesta" type="text">${textoModificado}</span>`;
      answer.innerHTML = content;
      

      //añadir elemento de botón copiar
      document.getElementById('botonC').style.display = "block";
  };

  const btnC = document.querySelector('[data-form-btnC]');

  const copiar = () => {
    const copyText = document.querySelector('[data-answer]');
    
    // Crear un elemento de tipo input temporal para seleccionar el texto y copiarlo al portapapeles
    const tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", copyText.textContent); // Copiar el contenido del elemento seleccionado
  
    // Agregar el elemento de tipo input al DOM para poder seleccionar su contenido
    document.body.appendChild(tempInput);
  
    // Seleccionar el contenido del elemento de tipo input
    tempInput.select();
  
    // Ejecutar el comando de copiar
    document.execCommand("copy");
  
    // Remover el elemento de tipo input del DOM, ya no lo necesitamos
    document.body.removeChild(tempInput);
  };

btnD.addEventListener('click', desencriptar);
btn.addEventListener('click', encriptar);
btnC.addEventListener('click', copiar);
