const express = require('express') 
const path = require('path') 

const indexRouter = require('../routers/index') 
const mainRouter = require('../routers/main')
const loginRouter = require('../routers/login')
const createRouter = require('../routers/create-account')
const _404Router = require('../routers/404')

const app = express() 

const dir = path.join(__dirname, "../public") 
app.use(express.static(dir)) 

app.use(indexRouter) 
app.use(mainRouter) 
app.use(loginRouter) 
app.use(createRouter) 
app.use(_404Router) 

const port = process.env.PORT || 3000 
app.listen(port, () => { 
    console.log('Server is up on port ' + port) 
})