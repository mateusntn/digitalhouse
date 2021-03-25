const dogs = [
    {
        name: 'boltz',
        age: 3,
        tutor: 'junior',
        vaccinated: false,
    },
    {
        name: 'Kiara',
        age: 5,
        tutor: 'Igor',
        vaccinated: true,
    },
    {
        name: 'Coragem',
        age: 8,
        tutor: 'Eustácio',
        vaccinated: false,
    }
];

const listDogs = () => {
    for(let dog of dogs) {
        console.log(`O cachorro do ${dog.tutor}, se chama ${dog.name}, tem ${dog.age} anos e ${dog.vaccinated ? 'já foi': 'não foi'} vacinado`);
    }
};

const vaccinateDog = (dog) => {
    if(dog.vaccinated == false) {
        dog.vaccinated = true;
        console.log(`O cachorro ${dog.name} foi vacinado`);
    } else {
        console.log(`O cachorro ${dog.name} já tinha sido vacinado`);
    }
};
