let estadosBrasil = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let localListaEstados = document.getElementById('lista-estados');

for (let index = 0; index < estadosBrasil.length; index+= 1) {
    let tagOption = document.createElement('option');
    tagOption.innerText = estadosBrasil[index];
    tagOption.value = estadosBrasil[index];
    localListaEstados.appendChild(tagOption);       
}
