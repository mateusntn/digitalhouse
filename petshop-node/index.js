const databasePath = './database.json'
const fs = require('fs');
let database = fs.readFileSync(databasePath);
database = JSON.parse(database);

const saveData = () => {
    const newDatabase = JSON.stringify(database, null, 2);
    fs.writeFileSync(databasePath, newDatabase, 'utf-8');
}

const listDogs = () => {
    for(let dog of database.dogs) {
        console.log(`O cachorro do ${dog.tutor}, se chama ${dog.name}, tem ${dog.age} anos e ${dog.isVaccinated ? 'já foi': 'não foi'} vacinado`);
    }
};

const vaccinateDog = (dog) => {
    if(dog.isVaccinated == false) {
        dog.isVaccinated = true;
        console.log(`O cachorro ${dog.name} foi vacinado`);
    } else {
        console.log(`O cachorro ${dog.name} já tinha sido vacinado`);
    }
    saveData();
};

const vaccineCampaign = () => {
    let numberDogsVaccinated = 0;
    database.dogs = database.dogs.map((dog) => {
        if(!dog.isVaccinated) {      
            vaccinateDog(dog);
            numberDogsVaccinated ++;
        }
        return dog;
    });
    console.log(`${numberDogsVaccinated} cachorros foram vacinados nessa campanha!!`);
};

const addDog = (name, age, tutor, isVaccinated) => {
    database.dogs.push({
        name: name,
        age: age,
        tutor: tutor,
        isVaccinated: isVaccinated,
        services: [],
    });
    console.log(`${name} foi adicionado com sucesso`);
    saveData();
}

const giveShower = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'banho',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} tomou banho!`);
    saveData();
}

const shear = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'tosa',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} foi tosado!`);
    saveData();
}

const trimNail = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'corte de unha',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} aparou as unhas!`);
    saveData();
}

const serveCostumer = (dog, service) => {
    console.log(`Olá ${dog.name}!`);
    service(dog);
    console.log(`Tchau ${dog.name}, volte sempre!`);
}

const findDog = (wantedDog) => {
    const found = database.dogs.find(function(dog){
        return dog.name === wantedDog;
    });
    return found ? found : `Nenhum pet encontrado com o nome ${wantedDog}`;
}