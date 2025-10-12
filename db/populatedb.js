#! /usr/bin/env node
import { Client } from "pg";
import dotenv from "dotenv";
import { argv } from "node:process";
import { getEnv } from "../helpers/getEnv.js";

dotenv.config();

const { connectionString } = getEnv(argv);

const date = new Date().toLocaleString();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  text TEXT,
  added TEXT
);

INSERT INTO messages (name, text, added)
VALUES
  ('Tangy', 'Hi there, shmoopy!', '${date}'),
  ('Roswell', 'spaaaace', '${date}'),
  ('Byleth', 'i like fishing :3', '${date}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
