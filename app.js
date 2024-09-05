/**
 * APP - Descobrir a área de um circulo
 * @author Saulo Gomes
 */

let raio,area,conversor

function calcular() {
    raio = frmCirculo.inputRaio.value
    area = (raio*raio) * 3.14
    frmCirculo.inputResultadomt.value = area.toFixed(1)
    
}

function converter(){
    conversor = area *100
    frmCirculo.inputResultadokm.value = conversor.toFixed(0)
}