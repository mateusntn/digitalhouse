const moment = require('moment');
const fs = require('fs');
const databasePath = './database.json';
let database = fs.readFileSync( databasePath, 'utf-8');

database = JSON.parse(database);

const petshop = {
    saveData: () => {
        const newDatabase = JSON.stringify(database, null, 2);
        fs.writeFileSync(databasePath, newDatabase, 'utf-8');
    },
    
    listDogs: () => {
        let textListDogs = "PETSHOP \n";

        database.dogs.forEach((dog) => {
            let {tutor, name, age, isVaccinated, services} = dog;
            textListDogs += `O cachorro do ${tutor}, se chama ${name}, tem ${age} anos e ${isVaccinated ? 'já foi': 'não foi'} vacinado \n`;
    
            services.forEach((service) => {
                let {date, typeServ} = service;
                textListDogs += (`${date} - ${typeServ} \n`);
            });
            textListDogs += '------------------- \n';
        });

        return textListDogs;
    },
    
    vaccinateDog: (dog) => {
        if(dog.isVaccinated == false) {
            dog.isVaccinated = true;
            console.log(`O cachorro ${dog.name} foi vacinado`);
        } else {
            console.log(`O cachorro ${dog.name} já tinha sido vacinado`);
        }
        saveData();
    },
    
    vaccineCampaign: () => {
        let numberDogsVaccinated = 0;
        database.dogs = database.dogs.map((dog) => {
            if(!dog.isVaccinated) {      
                vaccinateDog(dog);
                numberDogsVaccinated ++;
            }
            return dog;
        });
        console.log(`${numberDogsVaccinated} cachorros foram vacinados nessa campanha!!`);
    },
    
    addDog: (...newPets) => {
        newPets.forEach((newPet) => {
            database.dogs.push(newPet);
            console.log(`${newPet.name} foi adicionado com sucesso`);
        });
        petshop.saveData();
    },
    
    giveShower: (dog) => {
        const now = new Date();
        dog.services.push({
            typeServ: 'banho',
            date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
        });
        console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} tomou banho!`);
        saveData();
    },
    
    shear: (dog) => {
        const now = new Date();
        dog.services.push({
            typeServ: 'tosa',
            date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
        });
        console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} foi tosado!`);
        saveData();
    },
    
    trimNail: (dog) => {
        const now = new Date();
        dog.services.push({
            typeServ: 'corte de unha',
            date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
        });
        console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} : ${dog.name} aparou as unhas!`);
        saveData();
    },
    
    serveCostumer: (dog, service) => {
        console.log(`Olá ${dog.name}!`);
        service(dog);
        console.log(`Tchau ${dog.name}, volte sempre!`);
    },
    
    findDog: (wantedDog) => {
        const found = database.dogs.find(function(dog){
            return dog.name === wantedDog;
        });
        return found ? found : `Nenhum pet encontrado com o nome ${wantedDog}`;
    },
    
    filterByAge: (age1, age2) => {
        let foundDogs = database.dogs.filter((dog) => {
            return dog.age >= age1 && dog.age <= age2;
        });
    
        return foundDogs;
    },

    premiumCustomer: (dog) => {
        let { name, services } = dog;
    
        if (services.length > 5) {
            console.log(`Olá, ${name}! Você é um cliente especial e ganhou um descontão!`);
        } else {
            console.log(`Olá, ${name}! Você ainda não tem descontos disponiveis!\nPara obter descontos é necessário ter realizado mais de 5 serviços.`);
        }
    },
    
    contactTutor: (dog) => {
        return [
            dog.name,
            dog.tutor,
            dog.contact,
        ];
    },
    
    filterTutor: (nameTutor) => {
        let dogsTutor = database.dogs.filter((dog) => {
            return dog.tutor == nameTutor;
        });
    
        console.log(`Dogs do tutor ${nameTutor}:`)
        dogsTutor.forEach((dog) => {
            console.log(`${dog.nome} - ${dog.tipo}`)
        })
    }
}

module.exports = petshop;