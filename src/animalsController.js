const { nanoid } = require("nanoid");
const animalPoints = require('../data/animalPoints.json');
const inform = console.log;
// animalController.js

const create = (animals, animalName) => {
    const animal = {
        name: animalName,
        id: nanoid(4),
        points: animalPoints[animalName] || Math.floor(Math.random() * 100)
    };
    animals.push(animal);
    return animals;
};

const index = (animals) => {
    return animals.map((animal) => `${animal.id}: ${animal.name}`).join('\n');
};

const show = (animals, animalId) => {
    const animal = animals.find((animal) => animal.id === animalId);
    if (!animal) {
        return 'Animal not found';
    }
    return `${animal.id}: ${animal.name} has ${animal.points} points`;

};


const destroy = (animals, animalId) => {
    const index = animals.findIndex((animal) => animal.id === animalId)
    if (index >-1) {

    
    animals.splice(index, 1)
    inform("Animal removed")
    return animals
    }
    
        else {
    inform ("Animal not found no action taken")
    return animals
    }
}


module.exports = { create, index, show, destroy };
