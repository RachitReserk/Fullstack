const logger = require('./utils/logger')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')
require('express-async-errors')
const middleware = require('./utils/middleware')
const loginRouter = require('./controllers/login')
const userRouter = require('./controllers/user')

mongoose.connect(config.MONGODB_URI).then(() => {
    logger.info('Connected to MongoDB')
})

app.use(cors())
app.use(express.json())
app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)
app.use('/api/blogs',blogRouter)
app.use('/api/user',userRouter)
app.use('/api/login',loginRouter)



module.exports = app 