import { Client } from 'pg';
import { config } from '../config';
import fs from 'fs';
import bcrypt from 'bcrypt';

export async function executeQueryDB(query: string) {
  const client = new Client({
    host: config.database.host,
    port: Number(config.database.port),
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
  });
  client.connect();
  try {
    const { rows } = await client.query(query);
    await client.end();
    return rows;
  } catch (error) {
    await client.end();
    throw error;
  }
}

export async function initilizeDatabase() {
  console.log('Initializing DataBase');
  const sql = fs.readFileSync('sql/create_tables.sql').toString();
  await executeQueryDB(sql);
}

const isAdminAlreadyCreated = async () => {
  const query = "SELECT * FROM users WHERE email = 'pardodavid10@gmail.com';";
  const result = await executeQueryDB(query);
  return result.length > 0;
};

export async function createSuperAdminUser() {
  if (await isAdminAlreadyCreated()) {
    return;
  }
  const hashedPassword = bcrypt.hashSync('Metallica1999#', 5);
  const query = `INSERT INTO users (name, last_name, email, password, phone, role) 
                    VALUES ('David', 'Pardo', 'pardodavid10@gmail.com', '${hashedPassword}', '+593 0995710255', 'super_admin') RETURNING email;`;
  const result = await executeQueryDB(query);
  console.log(result[0].email);
}
