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