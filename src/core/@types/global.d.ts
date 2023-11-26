namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    PORT: number
    CLIENT_URL: string
    MONGODB_URL: string
  }
}

declare global {
  export interface Error {
    code: string
  }
}
