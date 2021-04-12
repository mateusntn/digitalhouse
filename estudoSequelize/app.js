const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

const list = (table, conditions) => {
    table.findAll(conditions).then((result) => {
        console.table(result.map(unity => unity.toJSON()))
    });
}