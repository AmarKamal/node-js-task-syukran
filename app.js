const express = require('express')
const app = express()
require('dotenv').config()

const logger = require('./logger/logger')
const { callBitcoinApi } = require('./cronjobs/cronjobs')

const PORT = process.env.PORT
const inventoryRouter = require('./router/inventoryRouter')

app.use('/api/inventory', inventoryRouter)

//task 3 complete fetching bitcoin api read and understand cronjob.js 
//callBitcoinApi();

app.listen(PORT, () => {
    logger.info(`Connected to server port ${PORT}!`)
   // logger.error(`Connected to server port ${PORT}!`)
    console.log(`Connected to server port ${PORT}!`)
})



// app/inventory/add
// app/inventory/delete
// app/inventory/update
// app/inventory/create