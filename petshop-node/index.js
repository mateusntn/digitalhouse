const databasePath = './database.json'
const fs = require('fs');
let database = fs.readFileSync(databasePath);
database = JSON.parse(database);

const saveData = () => {
    const newDatabase = JSON.stringify(database, null, 2);
    fs.writeFileSync(databasePath, newDatabase, 'utf-8');
}

const listDogs = () => {
    database.dogs.forEach((dog) => {
        let {tutor, name, age, isVaccinated, services} = dog;
        console.log(`O cachorro do ${tutor}, se chama ${name}, tem ${age} anos e ${isVaccinated ? 'já foi': 'não foi'} vacinado`);

        services.forEach((service) => {
            let {date, typeServ} = service;
            console.log(`${date} - ${typeServ}`);
        });
        console.log('-------------------');
    });
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

const addDog = (name, age, tutor, contact, isVaccinated) => {
    database.dogs.push({
        name: name,
        age: age,
        tutor: tutor,
        contact: contact,
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

const filterByAge = (age1, age2) => {
    let foundDogs = database.dogs.filter((dog) => {
        return dog.age >= age1 && dog.age <= age2;
    });

    return foundDogs;
}

const premiumCustomer = (dog) => {
    let { name, services } = dog;

    if (services.length > 5) {
        console.log(`Olá, ${name}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${name}! Você ainda não tem descontos disponiveis!\nPara obter descontos é necessário ter realizado mais de 5 serviços.`);
    }
}

const contactTutor = (dog) => {
    return [
        dog.name,
        dog.tutor,
        dog.contact,
    ];
}

const filterTutor = (nameTutor) => {
    let dogsTutor = database.dogs.filter((dog) => {
        return dog.tutor == nameTutor;
    });

    console.log(`Dogs do tutor ${nameTutor}:`)
    dogsTutor.forEach((dog) => {
        console.log(`${dog.nome} - ${dog.tipo}`)
    })
} 