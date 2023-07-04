//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    especialista()
    calcularCalorias()
})

/**
 * 1) Funcion para determinar cual es el especialista que le toca
 */
function especialista(){
    //trae la opcion de la localidad
    let localidad = document.getElementById('localidad').value

    alert("El especialista designado es")
}

/**
 * 2) Funcion para calcular el total de calorias diarias que gasta
 */
function calcularCalorias(){
    //trae la opcion del sexo
    let sexo = document.querySelector('input[name=sexo]:checked').value

    //trae los datos de edad, peso y altura y los tranforma en numeros
    let edad = parseInt(document.getElementById('edad').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseInt(document.getElementById('altura').value)

    //Guarda un arrelo con las actividades marcadas y sus valores
    let actividad = []
    document.getElementsByName("actividad[]").forEach(v => {
        actividad.push(v.value)
    })

    let total_calorias = 0
    alert("El total de calorias que gasta aproximadamente es"+total_calorias)
}