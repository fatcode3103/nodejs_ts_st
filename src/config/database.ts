export default {
  development: {
    username: 'root',
    password: 'root123',
    database: 'nodejs_ts',
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    logging: false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
