const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

require('dotenv').config()
const port = process.env.PORT

const cors = require('cors')
const bodyParser = require('body-parser')

const connect = require('./db/connect')
connect()

//1. import and coonect express=> socket
//2. io.on > connection established
// socket.on('requestCart' < try to relate with app.post('/requestCart')
io.on('connection', (socket) => {
  socket.on('requestCart', (cartValues) => {
    console.log("i am anil", cartValues)
    //send to other connected clients
    io.emit('cartValues', cartValues)
  });
});

app.use(bodyParser.json())
app.use(cors())

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const itemRoute = require('./routes/itemRoute');
const cartRoute = require('./routes/cartRoute');


app.use(registerRouter)
app.use(loginRouter)
app.use(itemRoute)
app.use(cartRoute)


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
