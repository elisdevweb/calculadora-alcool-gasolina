function calcularMelhorPreco(){

    //validacao dos campos

    let precoAlcool = document.getElementById ('alcool').value
    let precoGasolina = document.getElementById ('gasolina').value

if(precoAlcool !="" ){

    //resultado

    let resultado = precoAlcool / precoGasolina
    if (resultado >= 0.7){
        document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina"
    }
    else{
        document.getElementById('resultado').innerHTML = "Melhor utilizar Álcool"
    }

     if(precoGasolina !=""){
} 
     
     else{
        alert("Preencha o preço da gasolina")
     }
}

else{
    alert("Preencha o preço do alcool")
} 


}
