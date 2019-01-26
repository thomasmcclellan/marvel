import * as dotenv from 'dotenv'

dotenv.config()

export const environment = {
  production: true,
  apiUrl: `http://gateway.marvel.com/v1/public/comics?ts=${process.env.TS}&apikey=${process.env.PUBLICKEY}&hash=${process.env.HASH}`
};
