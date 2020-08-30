
require('dotenv').config();

module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost:/personal_library'
    },
    production: {
      client: 'pg',
      connection: process.env.HEROKU_POSTGRESQL_ONYX_URL
    }
  };
