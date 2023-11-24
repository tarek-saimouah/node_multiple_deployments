import { connect } from 'mongoose'
import config from '../../config'

export const connectDb = async (): Promise<boolean> => {
  const isConnected = new Promise<boolean>(async (resolve, reject) => {
    try {
      const url: string = config.MONGODB_URL || ''
      const connected = await connect(url)

      if (connected) {
        console.log('Database connected successfully.')
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (err) {
      console.error('DB connection error:', err)
      resolve(false)
    }
  })

  return isConnected
}
