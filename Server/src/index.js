const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const connect = require('./db/connect')
connect()
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');

app.use(registerRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
