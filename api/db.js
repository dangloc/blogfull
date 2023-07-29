import mysql from "mysql2";

export const db = mysql.createConnection({
  host: 'localhost',      // e.g., 'localhost'
  user: 'root',  // e.g., 'root'
  password: '1106',
  database: 'blog',  // e.g., 'mydatabase'
});



