const { readFileSync, writeFileSync } = require("node:fs");

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data, 0, 2);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

const index = (animals) => {
  return animals.map((animal) => `${animal.id}: ${animal.name}`).join('\n')
}

module.exports = {
  readJSONFile,
  writeJSONFile,
};