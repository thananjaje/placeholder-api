import sqlite3 from 'sqlite3';
import { readFileSync } from 'fs';
import { join } from 'path';

const dbPath = join('db', 'data.sqlite');
const db = new sqlite3.Database(dbPath);

// Load schema
const schema = readFileSync('schema.sql', 'utf8');
db.exec(schema, (err) => {
  if (err) {
    console.error('Error applying schema:', err.message);
  } else {
    console.log('Database initialized.');
  }
});

export default db;
