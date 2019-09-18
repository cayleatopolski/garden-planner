// const { Pool } = require("pg");
// const credentials = new Pool({
// user: "postgres",
// password: "password",
// host: "localhost",
// port: 5432,
// database: "Grow Pro DB",
// ssl: false
// });
// module.exports = credentials;

const pg = require("pg");
const url = require("url");
try {
require("dotenv").config();
} catch (e) {
console.log(e);
}
const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");
const config = {
user: auth[0],
password: auth[1],
host: params.hostname,
port: params.port,
database: params.pathname.split("/")[1],
ssl: params.hostname !== "localhost"
};
module.exports = new pg.Pool(config);