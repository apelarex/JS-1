
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');
for (var i=0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector('.info-imc');
    tdImc = peso/(altura*altura);
    var imc = paciente.querySelector('.info-imc').textContent = tdImc;

}
