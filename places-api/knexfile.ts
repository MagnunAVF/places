import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'my_pass',
      database: 'places',
    },
    migrations: {
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'my_pass',
      database: 'places',
    },
    migrations: {
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './dist/migrations',
    },
    seeds: {
      directory: './dist/seeds',
    },
  },
}

export default config
