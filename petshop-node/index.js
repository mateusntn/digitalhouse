const dogs = [
    {
        name: 'boltz',
        age: 3,
        tutor: 'junior',
        isVaccinated: true,
        services: [
            { typeServ: 'banho', date: '02/15/2021'},
            { typeServ: 'tosa', date: '02/15/2021'}
        ]
    },
    {
        name: 'Kiara',
        age: 5,
        tutor: 'Igor',
        isVaccinated: true,
        services: [
            { typeServ: 'tosa', date: '01/27/2021'}
        ]
    },
    {
        name: 'Coragem',
        age: 8,
        tutor: 'Eustácio',
        isVaccinated: false,
        services: [
            { typeServ: 'banho', date: '03/07/2021'},
        ]
    }
];

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
        name: `${name}`,
        age: `${age}`,
        tutor: `${tutor}`,
        isVaccinated: `${isVaccinated}`,
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