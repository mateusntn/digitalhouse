const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

const list = (table, conditions) => {
    table.findAll(conditions).then((result) => {
        console.table(result.map(unity => unity.toJSON()))
    });
}

const listByPk = (table, id, conditions) => {
    table.findByPk(id, conditions)
    .then((result) => {
        console.log(result.toJSON());
    });
}

const createUser = (users) => {
    Usuario.bulkCreate(users);
}

const createPost = (posts) => {
    Post.bulkCreate(posts);
    
}

const update = (table, change, conditions) => {
    table.update(change, conditions);
}

const destroy = (table, conditions) => {
    table.destroy(conditions);
}