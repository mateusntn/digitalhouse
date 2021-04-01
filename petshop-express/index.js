const express = require('express');
const app = express();

const petshop = require('./petshop');

app.use(express.json());

app.get('/pets', (req, res) => {
    return res.send(petshop.listDogs())
});

app.post('/pets', (req,res)=> {
    const { name, age, tutor, isVaccinated, services} = req.body
    const newPet = { name, age, tutor, isVaccinated, services };
    petshop.addDog(newPet);
    return res.json(newPet);
})


app.listen(3000);