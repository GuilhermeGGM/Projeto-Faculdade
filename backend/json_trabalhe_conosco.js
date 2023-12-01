const btN = document.querySelector('#btn-candidato')
const nome = document.querySelector('#nome');
const cpf = document.querySelector('#cpf');
const rg = document.querySelector('#rg');
const dataNasc = document.querySelector('#data-nascimento');
const email = document.querySelector('#email');
const estCivil = document.querySelector('#estado-civil');
const celular = document.querySelector('#celular');
const gen = document.querySelector('#genero');
const rua = document.querySelector('#rua-candidato');
const cep = document.querySelector('#cep');
const bairro = document.querySelector('#bairro-candidato');
const cidade = document.querySelector('#cidade-candidato');
const estado = document.querySelector('#estado-candidato');
const curriculo = document.querySelector('#curriculo');
const infoAdc = document.querySelector('#info-adc');



btn.addEventListener('click', function (e) {
    e.preventDefault();
    const formCandi = {
        nome: nome.value,
        cpf: cpf.value,
        rg: rg.value,
        dataNasc: dataNasc.value,
        gen: gen.value,
        email: email.value,
        estCivil: estCivil.value,
        cel: celular.value,
        endereço: {
            rua: rua.value,
            cep: cep.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value
        },
        curriculo: curriculo.value,
        infoAdc: infoAdc.value
    }

    const s_json = JSON.stringify(formCandi);
    console.log(s_json);

});
