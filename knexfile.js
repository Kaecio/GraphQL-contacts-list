// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'lista_clientes',
    user:     'root',
    password: ''
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/db/migration',
  }
};
