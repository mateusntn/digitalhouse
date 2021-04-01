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
    const { id } = req.params;
    const { title, owner } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(400).json({error: 'Projeto não foi encontrado'});
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return res.json(project)
});

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 50',
        'Projeto 2',
    ])
});

app.listen(3000);