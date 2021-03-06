const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { response } = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user = models.User;
let empresa = models.Empresa;
let vaga = models.Vaga;

// --------- Banco de Dados ---------

const dados = {
    'database' : 'trabalhaJovemBD',
    'username' : 'root',
    'password' : 'mtg200313'
};    
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dados.database, dados.username, dados.password, {
    host: 'localhost',
    dialect : 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado ao banco com sucesso!");
}).catch((erro) => {
    console.log("Falha ao conectar... Erro: "+ erro);
});

// ----------------------------------

// ------------- Rotas --------------

//RECEBE OS DADOS DO FORMULÁRIO LOGIN E REALIZA A VERIFICAÇÃO ATRAVÉS DO SELECT
app.post('/login', async (req, res) => {

    try { // TENTARÁ A SEGUINTE LÓGICA
        // VERICA A EXISTENCIA DE UM USUARIO COM OS DADOS COLETADOS
        let responseUser = await user.findOne({
            where: {cpf: req.body.nome, senha:req.body.senha}
        });
        if (responseUser === null) { // SE RETORNA responseUSER = NULL, NÃO FOI ENCONTRADO UM USUÁRIO

            // VERICAR A EXISTENCIA DE UMA EMPRESA COM OS DADOS COLETADOS
            let responseEmp = await empresa.findOne({
                where: {cnpj: req.body.nome, senha: req.body.senha}
            })
        
            if(responseEmp === null) { // SE RETORNA responseEMP = NULL, NÃO FOI ENCONTRADO UMA EMPRESA
        
                // LOGO, NÃO HÁ USUÁRIO OU EMPRESA REGISTRADOS COM OS DADOS COLETADOS
                console.log('Empresa ou usuário não encontrado!');
                res.send(JSON.stringify('emp or user not found'));
            }
            else {// ENCONTROU UMA EMPRESA COM OS DADOS COLETADOS
                console.log('Empresa encontrada!');
                res.send(responseEmp);
            }
        }
        else { // ENCONTROU UM USUÁRIO COM OS DADOS COLETADOS
            console.log('Usuário encontrado!');
            res.send(responseUser);
        }
    }
    catch(error) { // MOSTRARÁ O ERROR CASO HAJA
        console.log("Erro ao cadastrar usuário ou empresa! "+error);
    }

});

//RECEBE OS DADOS DO FORMULÁRIO CADASTRO USUARIO E REALIZA O INSERT
app.post('/cadastroUsuario', async (req, res) => {
    let newUser = await user.create({
        cpf: req.body.cpf,
        rg: req.body.rg,
        nome: req.body.nome,
        genero: req.body.genero,
        email: req.body.email,
        senha: req.body.senha,
        dataNasc: req.body.dataNasc,
        tel: req.body.tel,
        endereco: req.body.endereco
    });
    console.log("Usuário ("+newUser.nome+") cadastrado com sucesso!");
});

//RECEBE OS DADOS DO FORMULÁRIO CADASTRO EMPRESA E REALIZA O INSERT
app.post('/cadastroEmpresa', async (req, res) => {
    let newEmp = await empresa.create({
        cnpj: req.body.cnpj,
        nome: req.body.nome,
        tel: req.body.tel,
        endereco: req.body.endereco,
        nomeProp: req.body.nomeProp,
        cpfProp: req.body.cpfProp,
        ramoEmp: req.body.ramoEmp,
        email: req.body.email,
        senha: req.body.senha
    });
    console.log("Empresa ("+newEmp.nome+") cadastrada com sucesso!");
});

app.get('/consultar-vagas', async (req, res) => {
    const vagas = await vaga.findAll();
    console.log(vagas);
    res.json(vagas);
});

// ----------------------------------

// ---------- Server Port -----------

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("Servidor online");
});

// ----------------------------------