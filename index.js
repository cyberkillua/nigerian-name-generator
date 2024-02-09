const data = require("./names");

function generateRandomName() {
  try {
    const names = data.nameObjects;
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex].name;
  } catch (error) {
    return error;
  }
}

function generateFirstNameAndLastName() {
  try {
    const names = data.nameObjects;
    const lastNames = data.nameObjects.filter(
      (name) => name.canBeLastName === true
    );
    const randomFirstNameIndex = Math.floor(Math.random() * names.length);
    const randomSecondNameIndex = Math.floor(Math.random() * lastNames.length);
    const firstName = names[randomFirstNameIndex].name;
    const secondName = lastNames[randomSecondNameIndex].name;

    const fullName = firstName + " " + secondName;
    return fullName;
  } catch (error) {
    return error;
  }
}

module.exports = {
  generateRandomName,
  generateFirstNameAndLastName,
};
