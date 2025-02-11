import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'places',
  password: 'my_pass',
  port: 5432,
})

async function query(text: string, params?: (string | number)[]) {
  const client = await pool.connect()
  try {
    const res = await client.query(text, params)
    return res
  } finally {
    client.release()
  }
}

export async function deleteAllPlaces() {
  return query('DELETE FROM places')
}
