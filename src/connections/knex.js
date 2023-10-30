// eslint-disable-next-line import/no-extraneous-dependencies
// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORTA,
//   },
// });

const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL,
  searchPath: ["knex", "public"],
  ssl: {
    rejectUnauthorized: true,
  },
});

module.exports = knex;
