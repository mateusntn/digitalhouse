const database = require('./database.json'); 
let dogs = database.dogs;

const listDogs = () => {
    for(let dog of dogs) {
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
};

const vaccineCampaign = () => {
    let numberDogsVaccinated = 0;
    for (let dog of dogs) {
        if(dog.isVaccinated == false) {      
            dog.isVaccinated = true;
            numberDogsVaccinated ++;
        }
    }
    console.log(`${numberDogsVaccinated} cachorros foram vacinados nessa campanha!!`)
};

const addDog = (name, age, tutor, isVaccinated) => {
    dogs.push({
        name: name,
        age: age,
        tutor: tutor,
        isVaccinated: isVaccinated,
        services: [],
    });
}

const giveShower = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'banho',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} tomou banho!`);
}

const shear = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'tosa',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} foi tosado!`);
}

const trimNail = (dog) => {
    const now = new Date();
    dog.services.push({
        typeServ: 'corte de unha',
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    });
    console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} aparou as unhas!`);
}

const serveCostumer = (dog, service) => {
    service(dog);
}