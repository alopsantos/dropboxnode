import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { router } from './routes'
import '@shared/container'

import createConnection from '@shared/infra/typeorm';
createConnection(process.env.APP_DB_HOST);

const app = express()

app.use(express.json());

app.use(router)

export { app }
