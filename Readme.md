# Welcome to Nextep Lab 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/leshz/megaCat#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leshz/megaCat/graphs/commit-activity)

> Nextep born to make easier and faster manage your clinical laboratory with a friendly way for your paciets.

![Version](Documentos/images/login.png)

We build two wonderfull projects: **Backend** and **Frontend**

## **Backend APP**

You can read the [API REST Docs here](https://documenter.getpostman.com/view/1023966/Szt8c97m?version=latest)

### ✨ [API DEMO](https://megacat-backend.herokuapp.com)

### Install

```sh
npm install
```

### Usage

```sh
npm run start:api
```

### Run Tests

```sh
npm run test
```

### Build Model DB

```sh
npm run migration:run
```

### Sequelize Usefull Commands

If you want create a Sequelize model with a migration you need to run:

```sh
npx sequelize model:generate --name <singular_name> --attributes <attributeName>:<type>,<otherAttributeName>:<type>

Example:

npx sequelize model:generate user --attributes username:string,password:string
```

For more information [read this docs](https://sequelize.org/master/manual/migrations.html)

### Stack

- NodeJS
- Express
- Sequelize
- MySQL
- Jest
- JWT
- Passport
- Standard
- Hapi/Boom
- Firebase

---

## Frontend APP

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

### Stack

- ReactJs
- Redux
- Firebase
- SCSS
- Standard

## Authors

👤 **Guiselle Mejía <guissmejia@gmail.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

👤 **one <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

👤 **one <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

👤 **Jeffer Barragan <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz](https://gitlab.com/leshz)
- LinkedIn: [@linke imdd](https://www.linkedin.com/in/jeffbarragan/)
- Role: _DevOps Backend Developer_

👤 **one <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

## 🤝 Contributing :)

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/leshz/megaCat/issues). You can also take a look at the [contributing guide](https://github.com/leshz/megaCat/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Guiselle Mejía <guissmejia@gmail.com>](https://github.com/leshz).

This project is [MIT](https://github.com/leshz/megaCat/blob/master/LICENSE) licensed.
