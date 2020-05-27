//const { MongoClient, ObjectId } = require('mongodb');
const mysql = require('mysql');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

class MySQLLib {
  constructor() {
    // eslint-disable-next-line new-cap
    this.connection = new mysql.createConnection({
      host: `${config.dbHost}`,
      user: `${USER}`,
      password: `${PASSWORD}`,
      port: 3306,
      database: `${DB_NAME}`,
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if (error) {
          reject(error);
        }

        console.log('Connected successfully to MySQL');
        resolve(this.client.query(this.dbName));
      });
    });
  }
}

module.exports = MySQLLib;
