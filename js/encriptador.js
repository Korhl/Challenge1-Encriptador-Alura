//*Formato del Texto1

const input = document.querySelector('[data-form-input]');
    const value = input.value; 
    input.value = "Ingrese su texto aquí" ;

const btn  = document.querySelector ('[data-form-btnE]');

document.getElementById('botonC').style.display = "none";


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
        return value.replace(vocalesRegex, vocal => mapeo[vocal.toLowerCase()] || vocal);
      }
      
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
    
    document.getElementById('mono').style.display = "none";
    document.getElementById('desc').style.display = "none";

    //añadir elemento de botón copiar
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

        return value.replace(PalabrasRegex, vocal => mapeo[vocal.toLowerCase()] || vocal);
      }
      
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
    
    document.getElementById('mono').style.display = "none";
    document.getElementById('desc').style.display = "none";

    //añadir elemento de botón copiar
};

btnD.addEventListener('click', desencriptar);
btn.addEventListener('click', encriptar);

