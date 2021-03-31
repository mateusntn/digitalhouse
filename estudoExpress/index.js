const express = require('express');
const app = express();
const { v4:uuidv4 } = require('uuid');

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    return res.json(projects);
});

app.post('/projects', (req, res) => {
    const {title, owner} = req.body;
    const project = {id: uuidv4(), title, owner};
    projects.push(project);
    return res.json(project);
});

app.put('/projects/:id', (req, res) => {
    const params = req.params;
    console.log(params);
    return res.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ])
});

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 50',
        'Projeto 2',
    ])
});

app.listen(3000);