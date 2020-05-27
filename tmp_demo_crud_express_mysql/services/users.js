const MySqlLib = require('../lib/mysql');

class UsersService {
  constructor() {
    this.table = 'users';
    this.mysqlDB = new MySqlLib();
  }

  async getUsers({ tags }) {
    const users = await this.mysqlDB.query('SELECT * FROM users', '');

    return users;
  }
}

module.exports = UsersService;
