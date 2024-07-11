const express = require('express');
const mongoose = require('mongoose');

const AlunoSchema = require('./schemas/AlunoSchema');

const server = express();

server.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.94skk8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

server.post('/aluno', async (req, res)=>{

    //const name = req.body.name;
    //const matricula = req.body.matricula;
    //const disciplina = req.body.disciplina;

    const {name, matricula, disciplina} = req.body;

    const aluno = await AlunoSchema.create({nome: name, matricula, disciplina});

    res.status(201).json(aluno);

});


server.get('/aluno/:id', async (request, response)=>{
    const {id} = request.params;
    const alunos = await AlunoSchema.findById(id);
    return response.status(200).json(alunos);
});


server.get('/aluno', async (request, response)=>{
    const alunos = await AlunoSchema.find();
    return response.status(200).json(alunos);
});

server.put('/aluno/:id', async (request, response)=>{
    const {id} = request.params;
    console.log(id);
    const aluno = await AlunoSchema.updateOne({'_id':id}, request.body);
    response.status(200).json(aluno);
});

server.delete('/aluno/:id', async (req, res) => {
    const {id} = req.params;
    const aluno = await AlunoSchema.deleteOne({ '_id': id});
    return res.status(200).json({message: 'Usuario deletado'})
})

server.listen(3003, 
    ()=>console.log('Servidor iniciado na porta http://localhost:3003'));