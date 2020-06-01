# WIP | MEGACAT LAB MANAGEMENT SYSTEM Backend

This is the backend project for the Platzi Master Challenge.

You can read the [API REST Docs here](https://documenter.getpostman.com/view/1023966/Szt8c97m?version=latest)

## Installation

You need in this folder run:
```bash
  npm install
```

## Sequelize DB
### Sequelize npm commands

For run migrations you need excecute

```bash
npm run migration:run
```

If you need make an undo one step at time, you need excecute:

```bash
npm run migration:undo
```

**DANGER**: If you need reverse all the changes in the DB, you need to run:

```bash
npm run migration:undo:all
```

### Sequelize usefull commands

If you want create a Sequelize model with a migration you need to run:

```
npx sequelize model:generate --name <singular_name> --attributes <attributeName>:<type>,<otherAttributeName>:<type>

Example:

npx sequelize model:generate user --attributes username:string,password:string
```

For more information [read this docs](https://sequelize.org/master/manual/migrations.html)

## Stack:
* NodeJS
* Express
* Sequelize
* MySQL
* Jest
* JWT
* Passport
* Standard
* Hapi/Boom


--------------





# Welcome to Nextep Lab 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/leshz/megaCat#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leshz/megaCat/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/leshz/Nextep Lab)](https://github.com/leshz/megaCat/blob/master/LICENSE)

> Sistema Gestor de Exámenes para Laboratorios Clínicos

### 🏠 [Homepage](https://github.com/leshz/megaCat#readme)

### ✨ [Demo](https://nextep-lab.herokuapp.com)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Guiselle Mejía <guissmejia@gmail.com>**

* Website: https://gitlab.com/leshz
* Github: [@leshz](https://github.com/leshz)
* LinkedIn: [@linke imdd](https://linkedin.com/in/linke imdd)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/leshz/megaCat/issues). You can also take a look at the [contributing guide](https://github.com/leshz/megaCat/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [Guiselle Mejía <guissmejia@gmail.com>](https://github.com/leshz).

This project is [MIT](https://github.com/leshz/megaCat/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_