const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

const list = (table, conditions) => {
    table.findAll(conditions).then((result) => {
        console.table(result.map(unity => unity.toJSON()))
    });
}

const listByPk = (table, id) => {
    table.findByPk(id)
    .then((result) => {
        console.table(result.toJSON());
    });
}

const createUser = (name, email, password) => {
    Usuario.create({
        nome: name,
        email: email,
        senha: password
    });
}

const createPost = (text, path, likes, userId) => {
    Post.create({
        texto: text,
        img: path,
        n_likes: likes,
        usuarios_id: userId
    });
    
}

const update = (table, change, conditions) => {
    table.update(change, conditions);
}

const destroy = (table, conditions) => {
    table.destroy(conditions);
}