# Nigerian Name Generator

## Introduction

The Nigerian Name Generator is a Node.js package that allows users to generate Nigerian names randomly or combine first names and last names to create full names.

## Installation

You can install the package via npm:

```bash
npm install nigerian-name-generator
```

## Usage

### Generating Random Name

To generate a random Nigerian name, you can use the `generateRandomName()` function:

```javascript
const { generateRandomName } = require("nigerian-name-generator");

const randomName = generateRandomName();
console.log(randomName); // Output: e.g., "Olufemi", "Chidubem", "Adewale", etc.
```

### Generating Full Name

To generate a full name by combining a random first name and last name, you can use the `generateFirstNameAndLastName()` function:

```javascript
const { generateFirstNameAndLastName } = require("nigerian-name-generator");

const fullName = generateFirstNameAndLastName();
console.log(fullName); // Output: e.g., "Chinonso Odum", "Emeka Nwosu", "Folasade Lawal", etc.
```

## Data Source

The names used in this package are sourced from a list of common Nigerian names. The package ensures that generated names align with Nigerian naming conventions.
