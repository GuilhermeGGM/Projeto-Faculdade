const btn = document.querySelector('#btn-vendas-usuario')
const nome = document.querySelector('#nome');
const profProp = document.querySelector('#profissao-cliente');
const cpf = document.querySelector('#cpf');
const rg = document.querySelector('#rg');
const dataNasc = document.querySelector('#data-nascimento');
const email = document.querySelector('#email');
const estCivil = document.querySelector('#estado-civil');
const celular = document.querySelector('#celular');
const ruaProp = document.querySelector('#rua-proprietario');
const cepProp = document.querySelector('#cep');
const bairroProp = document.querySelector('#bairro-proprietario');
const cidadeProp = document.querySelector('#cidade-proprietario');
const estadoProp = document.querySelector('#estado-proprietario');
const areaUtil = document.querySelector('#area-util');
const areaTot = document.querySelector('#area-total');
const imvDorm = document.querySelector('#dormitorios');
const imvSuit = document.querySelector('#suites');
const imvVgs = document.querySelector('#vagas');
const imvRua = document.querySelector('#rua-imovel');
const imvCep = document.querySelector('#cep-imovel');
const imvBairro = document.querySelector('#bairro-imovel');
const imvCidade = document.querySelector('#cidade-imovel');
const imvEstado = document.querySelector('#estado-imovel');
const imvObj = document.querySelector('#pretende');
const imvTipo = document.querySelector('#imv-tipo');
const imvFinalidade = document.querySelector('#finalidade');
const imvValorVenda = document.querySelector('#valor-venda');
const imvValorLoc = document.querySelector('#valor-locacao');
const imvInfoAdc = document.querySelector('#info-adc');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    const formVenda = {
        codImv: "00000",
        nomeProp: nome.value,
        profProp: profProp.value,
        cpfProp: cpf.value,
        rgProp: rg.value,
        dataNascProp: dataNasc.value,
        emailProp: email.value,
        estCivilProp: estCivil.value,
        celProp: celular.value,
        endereçoProp: {
            rua: ruaProp.value,
            cep: cepProp.value,
            bairro: bairroProp.value,
            cidade: cidadeProp.value,
            estado: estadoProp.value
        },
        areaUtilImv: areaUtil.value,
        areaTotImv: areaTot.value,
        quantImvDorm: imvDorm.value,
        quantImvSuit: imvSuit.value,
        quantImvVgs: imvVgs.value,
        edereçoImv: {
            rua: imvRua.value,
            cep: imvCep.value,
            bairro: imvBairro.value,
            cidade: imvCidade.value,
            estado: imvEstado.value,
        },
        ObjImv: imvObj.value,
        tipoImv: imvTipo.value,
        finalidadeImv: imvFinalidade.value,
        valorVendaImv: imvValorVenda.value,
        valorLocImv: imvValorLoc.value,
        infoAdcImv: imvInfoAdc.value
    }

    const s_json = JSON.stringify(formVenda);
    console.log(s_json);

});