import path from 'path'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
const env = dotenv.config({ path: path.resolve(__dirname, '../.env') })
dotenvExpand.expand(env)

interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  CLIENT_URL: string | undefined
  MONGODB_URL: string | undefined
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGODB_URL: process.env.MONGODB_URL,
  }
}

const config = getConfig()

export default config
