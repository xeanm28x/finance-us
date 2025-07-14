import env from '#start/env'
import { DatabaseConfig } from '@adonisjs/lucid/types/database'

const databaseConfig: DatabaseConfig = {
  connection: env.get('DB_CONNECTION', 'mysql'),
  connections: {
    mysql: {
      client: env.get('DB_CLIENT', 'mysql2'),
      connection: {
        host: env.get('DB_HOST', 'localhost'),
        port: env.get('DB_PORT', 3306),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_NAME'),
      },
      migrations: { naturalSort: true },
      debug: false,
    },
  },
}

export default databaseConfig
