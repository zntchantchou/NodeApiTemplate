import * as dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

app.listen(process.env.PORT, () => console.log(`[Server.js]: listening on ${process.env.PORT}...`))
