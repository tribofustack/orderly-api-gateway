import express, { json } from 'express'
import { gateway } from './gateway';

const app = express();
app.use(json())

// rate limiting - limiter
// http config - axios
// amqp config - rabbitmq
// metrics - prom-client
// tracing - trace
// auth - jwt
// validation - zod / ajv

// request / response middlewares
// cors
// timeouts and circuit breaker
// logs
// persist state of sagas in mongoDB

app.use('/saga', gateway)

export { app }

