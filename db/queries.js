import { pool } from "./pool";

export async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM messages")
}