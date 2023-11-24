import server from './app'
import config from './config'
import { connectDb } from './core/init-scripts/db.connection'

const PORT = config.PORT || 3000

server.listen(PORT, async () => {
  const isConnected = await connectDb()

  if (!isConnected) {
    console.error('Process terminated! cannot connect to database.')
    process.exit(0)
  }

  console.log(`Server is running on port: ${PORT}`)
})
