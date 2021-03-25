const dogs = [
    {
        name: 'boltz',
        age: 3,
        tutor: 'junior'
    },
    {
        name: 'Kiara',
        age: 5,
        tutor: 'Igor'
    },
    {
        name: 'Coragem',
        age: 8,
        tutor: 'Eustácio'
    }
];

const listDogs = () => {
    for(let dog of dogs) {
        console.log(`O cachorro do ${dog.tutor}, se chama ${dog.name}, e tem ${dog.age} anos`)
    }
};

listDogs();