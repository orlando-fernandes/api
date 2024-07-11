const {Schema, model} = require('mongoose');

const AlunoSchema = new Schema({
    nome: String,
    matricula: Number,
    disciiplina: String
});

module.exports = model('Aluno', AlunoSchema);

