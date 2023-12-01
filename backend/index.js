const express = require('express');
const server = express();
const form_vendas = require('./form_vendas_usuario')
const form_trabalhe = require('./json_trabalhe_conosco')



server.get('/vendas-user', function(req, resp) {
    return resp.json(form_vendas.s_json)
});

server.get('/inf-candidato', function (req, resp) {
    return resp.json(form_trabalhe.s_json)
});

server.listen(3000, () => {
    console.log('servidor está funcionando')
});