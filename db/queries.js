import { pool } from "./pool.js";
import format from "pg-format";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function addMessage(obj) {
  await pool.query(
    "INSERT INTO messages (name, text, added) VALUES ($1, $2, $3)",
    [obj.name, obj.text, obj.added]
  );
}

export async function getMessageById(id) {
  const sql = format("SELECT * FROM messages WHERE id=%s;", id);
  const { rows } = await pool.query(sql);
  return rows[0];
}

export async function getMessageByText(text) {
  const sql = format("SELECT * FROM messages WHERE text Like %L;", text);
  const { rows } = await pool.query(sql);
  return rows[0]
}
