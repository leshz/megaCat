# demo_crud_express_mysql (WIP)

## Demo project based on [this project](https://github.com/tonysk08/crud-nodeJS-mariaDB) from [@tonysk08](https://github.com/tonysk08)

## Description

This is a **WIP (Work in progress)** personal project for test NodeJS, Express, MySQL, and CRUD operations.

### Technology used

This project was build with the use of:

- Javascript, NodeJS, Nodemon
- Express
- MySQL
- AWS Cloud Services (RDS)
- Eslint, Prettier, Babel, Husky, ejs

Here is a screencapture of the latest version:

![Demo](https://i.imgur.com/BuzwOdm.png)

---

## How to use this project

Make sure you have access to MySQL/MariaDB server and can create databases and tables (review your permissions).
Create the example table with these instructions:

```bash
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
```

### Clone this repo

You can use and change 'my_folder' on this instruction to create a new folder

```bash
git clone git@github.com:FernandoTorresL/demo_crud_express_mysql.git my_folder
```

### Change to working directory and install

```bash
cd my_folder
npm install
```

### Create your .env file (only .env.example provided)

```bash
vi .env
```

Using **_.env.example_** file, you can set your own access credentials to database and configuration values.

### Execute

Now, open a new terminal, in the same folder, and execute with

```bash
npm run dev
```

Finally, you can view the project on localhost: *<your_port>*
Remember that you must use the same *<your_port>* that you define on your **.env** file
Review your console

---

#### Follow me

[fertorresmx.dev](http://fertorresmx.dev/)
[fertorresmx.com](http://fertorresmx.com/)

#### :globe_with_meridians: Twitter, Instagram: @fertorresmx
