const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todolist.sqlite");

db.run(`
-- Create the todos table if it doesn't exist
CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    dueon DATETIME,
    description TEXT
);

`);

db.exec(`
INSERT INTO todos (title, created, dueon, description) VALUES
('Buy groceries', '2023-05-10 12:34:56', '2023-05-20 12:34:56', 'This is a sample description for the task.'),
('Read a book', '2023-05-11 12:34:56', '2023-05-21 12:34:56', 'Complete this task as soon as possible.'),
('Complete project', '2023-05-12 12:34:56', '2023-05-22 12:34:56', 'This task is important and needs to be done by the due date.'),
('Call mom', '2023-05-14 12:34:56', '2023-05-24 12:34:56', 'Check all the details before marking this task as complete.'),
('Clean the house', '2023-05-15 12:34:56', '2023-05-25 12:34:56', 'This is a sample description for the task.'),
('Write a blog post', '2023-05-16 12:34:56', '2023-05-26 12:34:56', 'Complete this task as soon as possible.'),
('Pay bills', '2023-05-17 12:34:56', '2023-05-27 12:34:56', 'This task is important and needs to be done by the due date.'),
('Plan vacation', '2023-05-18 12:34:56', '2023-05-28 12:34:56', 'Remember to prioritize this task'),
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
('Attend seminar', '2023-06-03 12:34:56', '2023-06-13 12:34:56', 'Check all the details before marking this task as complete.'),
('Play a game', '2023-06-04 12:34:56', '2023-06-14 12:34:56', 'This is a sample description for the task.'),
('Write a report', '2023-06-05 12:34:56', '2023-06-15 12:34:56', 'Complete this task as soon as possible.'),
('Study for exam', '2023-06-06 12:34:56', '2023-06-16 12:34:56', 'This task is important and needs to be done by the due date.'),
('Take a nap', '2023-06-07 12:34:56', '2023-06-17 12:34:56', 'Remember to prioritize this task.'),
('Attend workshop', '2023-06-08 12:34:56', '2023-06-18 12:34:56', 'Check all the details before marking this task as complete.'),
('Meditate', '2023-06-09 12:34:56', '2023-06-19 12:34:56', 'This is a sample description for the task.'),
('Complete survey', '2023-06-10 12:34:56', '2023-06-20 12:34:56', 'Complete this task as soon as possible.'),
('Visit a friend', '2023-06-11 12:34:56', '2023-06-21 12:34:56', 'This task is important and needs to be done by the due date.'),
('Refactor code', '2023-06-12 12:34:56', '2023-06-22 12:34:56', 'Remember to prioritize this task.'),
('Research topic', '2023-06-13 12:34:56', '2023-06-23 12:34:56', 'Check all the details before marking this task as complete.'),
('Clean garage', '2023-06-14 12:34:56', '2023-06-24 12:34:56', 'This is a sample description for the task.'),
('Go hiking', '2023-06-15 12:34:56', '2023-06-25 12:34:56', 'Complete this task as soon as possible.'),
('Start a journal', '2023-06-16 12:34:56', '2023-06-26 12:34:56', 'This task is important and needs to be done by the due date.'),
('Listen to podcast', '2023-06-17 12:34:56', '2023-06-27 12:34:56', 'Remember to prioritize this task.'),
('Bake a cake', '2023-06-18 12:34:56', '2023-06-28 12:34:56', 'Check all the details before marking this task as complete.'),
('Create a budget', '2023-06-19 12:34:56', '2023-06-29 12:34:56', 'This is a sample description for the task.'),
('Attend concert', '2023-06-20 12:34:56', '2023-06-30 12:34:56', 'Complete this task as soon as possible.'),
('Write poetry', '2023-06-21 12:34:56', '2023-07-01 12:34:56', 'This task is important and needs to be done by the due date.'),
('Do laundry', '2023-06-22 12:34:56', '2023-07-02 12:34:56', 'Remember to prioritize this');`);
