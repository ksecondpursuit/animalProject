const inform = console.log;

const { writeJSONFile, readJSONFile } = require('./src/helpers');
const { create, index, show, destroy } = require('./src/animalsController');

function run() {
    const action = process.argv[2];
    const animal = process.argv[3];
    let animals = readJSONFile("./data", "animals.json");
    let writeToFile = false;
    let updatedAnimals = [];

    switch (action) {
      case "index":
        inform(index(animals));
        break;
      case "create":
        updatedAnimals = create(animals, animal);
        writeToFile = true;
        break;
      case "show":
        inform(show(animals, animal));
        break;
      case "update":
        inform(action, animal);
        break;
      case "destroy":
        updatedAnimals= destroy(animals, animal)
        writeToFile = true;
        break;
      case "score":
        inform(action);
        break;
      default:
        inform("There was an error");
    }

    if (writeToFile) {
      writeJSONFile("./data", "animals.json", updatedAnimals);
    }
}

run();
