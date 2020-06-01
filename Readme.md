# Welcome to Nextep Lab 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/leshz/megaCat#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leshz/megaCat/graphs/commit-activity)

> Nextep born to make easier and faster manage your clinical laboratory with a friendly way for your patients.

![Version](Documentos/images/login.png)

# Take A Look

- [Login](https://www.figma.com/proto/3aPltYqUg94Up8V6r5nHFn/MegaCat?node-id=4%3A0&scaling=scale-down)
- [Patient](https://www.figma.com/proto/3aPltYqUg94Up8V6r5nHFn/MegaCat?node-id=25%3A2&scaling=scale-down)
- [Admin](https://www.figma.com/proto/3aPltYqUg94Up8V6r5nHFn/MegaCat?node-id=255%3A1&scaling=scale-down)
- [Bacteriologist](https://www.figma.com/proto/3aPltYqUg94Up8V6r5nHFn/MegaCat?node-id=388%3A37&scaling=scale-down)

We build two wonderful projects: **Backend** and **Frontend**

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

- Github: [@guissmejia](github.com/guissmejia)
- LinkedIn: [@linke](https://www.linkedin.com/in/guiselle-mejía-561a61191/)

👤 **Yoshua Díaz**

- Website: [yoshuadiaz.com](https://yoshuadiaz.com)
- Github: [@yoshuadiaz](https://github.com/yoshuadiaz)
- LinkedIn: [in/yoshuadiaz](https://www.linkedin.com/in/yoshua-diaz)

👤 **one <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

👤 **Jeffer Barragan <leshz@me.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz](https://gitlab.com/leshz)
- LinkedIn: [@linke](https://www.linkedin.com/in/jeffbarragan/)

👤 **one <example@example.com>**

- Website: https://gitlab.com/leshz
- Github: [@leshz]()
- LinkedIn: [@linke imdd]()

## 🤝 Contributing :)

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/leshz/megaCat/issues). You can also take a look at the [contributing guide](https://github.com/leshz/megaCat/blob/master/CONTRIBUTING.md).

## Documentation

You can find the Nextep App documentation [On Notion](https://www.notion.so/MegaCat-Documentaci-n-26f9cb69824d4fd5bbb43898ca7e9ea6)


## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Guiselle Mejía <guissmejia@gmail.com>](https://github.com/leshz).

This project is [MIT](https://github.com/leshz/megaCat/blob/master/LICENSE) licensed.
