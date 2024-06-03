const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgres://express_sfrf_user:8pM1HxIvufvzJtw0oNu86eR42IdPL7Xz@dpg-cpegnqlds78s73f05bog-a.ohio-postgres.render.com:5432/express_sfrf",
  ssl: { rejectUnauthorized: false },
});

async function test() {
  try {
    console.log("started");
    client.connect();
    const result = await client.query("SELECT * FROM todos");
    const todos = result.rows;
    console.log(todos);
  } catch (error) {
    console.error("Error executing query:", error.stack);
  } finally {
    console.log("done");
    await client.end();
  }
}
test();
