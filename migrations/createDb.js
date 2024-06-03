const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgres://express_sfrf_user:8pM1HxIvufvzJtw0oNu86eR42IdPL7Xz@dpg-cpegnqlds78s73f05bog-a.ohio-postgres.render.com:5432/express_sfrf",
  ssl: { rejectUnauthorized: false },
});

const createTableQuery = `
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        dueon TIMESTAMP,
        description TEXT
      );
    `;
const insertDataQuery = `
      INSERT INTO todos (title, created, dueon, description) VALUES
      ('Buy groceries', '2023-05-10 12:34:56', '2023-05-20 12:34:56', 'This is a sample description for the task.'),
      ('Read a book', '2023-05-11 12:34:56', '2023-05-21 12:34:56', 'Complete this task as soon as possible.'),
      ('Complete project', '2023-05-12 12:34:56', '2023-05-22 12:34:56', 'This task is important and needs to be done by the due date.'),
      ('Exercise', '2023-05-13 12:34:56', '2023-05-23 12:34:56', 'Remember to prioritize this task.'),
      ('Call mom', '2023-05-14 12:34:56', '2023-05-24 12:34:56', 'Check all the details before marking this task as complete.'),
      ('Clean the house', '2023-05-15 12:34:56', '2023-05-25 12:34:56', 'This is a sample description for the task.'),
      ('Write a blog post', '2023-05-16 12:34:56', '2023-05-26 12:34:56', 'Complete this task as soon as possible.'),
      ('Pay bills', '2023-05-17 12:34:56', '2023-05-27 12:34:56', 'This task is important and needs to be done by the due date.'),
      ('Plan vacation', '2023-05-18 12:34:56', '2023-05-28 12:34:56', 'Remember to prioritize this task.'),
      ('Attend meeting', '2023-05-19 12:34:56', '2023-05-29 12:34:56', 'Check all the details before marking this task as complete.'),
      ('Finish assignment', '2023-05-20 12:34:56', '2023-05-30 12:34:56', 'This is a sample description for the task.'),
      ('Visit doctor', '2023-05-21 12:34:56', '2023-05-31 12:34:56', 'Complete this task as soon as possible.'),
      ('Organize files', '2023-05-22 12:34:56', '2023-06-01 12:34:56', 'This task is important and needs to be done by the due date.'),
      ('Learn a new skill', '2023-05-23 12:34:56', '2023-06-02 12:34:56', 'Remember to prioritize this task.'),
      ('Cook dinner', '2023-05-24 12:34:56', '2023-06-03 12:34:56', 'Check all the details before marking this task as complete.'),
      ('Watch a movie', '2023-05-25 12:34:56', '2023-06-04 12:34:56', 'This is a sample description for the task.'),
      ('Water the plants', '2023-05-26 12:34:56', '2023-06-05 12:34:56', 'Complete this task as soon as possible.'),
      ('Go for a walk', '2023-05-27 12:34:56', '2023-06-06 12:34:56', 'This task is important and needs to be done by the due date.'),
      ('Update resume', '2023-05-28 12:34:56', '2023-06-07 12:34:56', 'Remember to prioritize this task.'),
      ('Fix the car', '2023-05-29 12:34:56', '2023-06-08 12:34:56', 'Check all the details before marking this task as complete.'),
      ('Send emails', '2023-05-30 12:34:56', '2023-06-09 12:34:56', 'This is a sample description for the task.'),
      ('Backup data', '2023-05-31 12:34:56', '2023-06-10 12:34:56', 'Complete this task as soon as possible.'),
      ('Review code', '2023-06-01 12:34:56', '2023-06-11 12:34:56', 'This task is important and needs to be done by the due date.'),
      ('Shop for clothes', '2023-06-02 12:34:56', '2023-06-12 12:34:56', 'Remember to prioritize this task.'),
      ('Attend seminar', '2023-06-03 12:34:56', '2023-06-13 12:34:56', 'Check all the details before marking this task as complete.');
    `;
async function db() {
  await client.connect();
  // Create table if it doesn't exist
  console.log("Connected to the database.");
  // Insert 25 rows of dummy data

  //  await client.query(createTableQuery);
  // await client.query(insertDataQuery);

  var a = await client.query(`SELECT NOW()`);
  console.log(a);
  await client.end();
}
db();
console.log("yay");
